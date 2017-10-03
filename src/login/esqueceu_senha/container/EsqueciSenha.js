import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import LoginPagina from '../../pagina/LoginPagina'
import Form from '../form/EsqueciSenhaForm'
import { enviarEmailEsqueciSenha } from '../../../state/autenticacao/AuthActions'
import { limparErros } from '../../../state/erros/ErrosActions'

class EsqueciSenha extends Component {

  componentWillMount() {
    this.setState({ enviado: false })
  }

  enviarEmail(dados) {
    this.props.enviarEmailEsqueciSenha(dados.email)
    this.props.limparErros()
    this.setState({ enviado: true })
  }

  voltarAoLogin() {
    this.props.history.push("/login")
  }

  render() {
    return (<LoginPagina>
      <Form
        enviarEmail={(dados) => this.enviarEmail(dados)}
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
  return bindActionCreators({ enviarEmailEsqueciSenha, limparErros }, dispatch)

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EsqueciSenha))