import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Mensagem from '../mensagem/Mensagem'
import LoginPagina from '../../pagina/LoginPagina'
import { validarEmail } from '../../../state/autenticacao/AuthActions'
import { limparErros } from '../../../state/erros/ErrosActions'

class ValidarCadastro extends Component {

  irParaLogin() {
    this.props.history.push("/login")
  }

  componentDidMount() {
    let validar = this.props.match.params
    this.props.validarEmail(validar)
    this.props.limparErros()
  }

  render() {

    return (
      <LoginPagina>
        <Mensagem erro={this.props.erro} 
                  validando={this.props.validando}
                  jaValidado={this.props.jaValidado} 
                  irParaLogin={() => this.irParaLogin()} />
      </LoginPagina>)
  }
}

function mapStateToProps({ errosStateTree, authStateTree }) {
  return {
    erro: errosStateTree.erro,
    validando: authStateTree.validando,
    jaValidado: authStateTree.jaValidado
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    validarEmail: validarEmail,
    limparErros: limparErros
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ValidarCadastro))