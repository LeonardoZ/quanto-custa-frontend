import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import LoginPagina from '../../pagina/LoginPagina'
import Form from '../form/AtivarCadastroForm'
import { reenviarEmailAtivacao } from '../../../state/autenticacao/AuthActions'
import { limparErros } from '../../../state/erros/ErrosActions'

class AtivarCadastro extends Component {

  componentWillMount() {
    this.setState({enviado: false})
  }

  reenviarEmail(dados) {
    this.props.reenviarEmailAtivacao(dados.email)
    this.props.limparErros()
    this.setState({enviado: true})
  }
  
  voltarAoLogin(){
    this.props.history.push("/login")
  }

  render() {
    return (
      <LoginPagina>
        <Form 
            reenviarEmail={(dados) => this.reenviarEmail(dados)} 
            enviado={this.state.enviado}
            voltarAoLogin={() => this.voltarAoLogin()}
            erro={this.props.erro} />
      </LoginPagina>)
  }
}

function mapStateToProps({ errosStateTree }) {
  return {
    erro: errosStateTree.erro
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reenviarEmailAtivacao, limparErros }, dispatch)

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AtivarCadastro))