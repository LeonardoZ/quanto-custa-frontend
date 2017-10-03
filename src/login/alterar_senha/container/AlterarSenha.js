import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from '../form/AlterarSenhaForm'
import LoginPagina from '../../pagina/LoginPagina'
import { cadastrarUsuario, alterarSenha } from '../../../state/autenticacao/AuthActions'
import { limparErros } from '../../../state/erros/ErrosActions'

class ValidarCadastro extends Component {

  irParaLogin() {
    this.props.history.push("/login")
  }

  componentDidMount() {
  }
  
  alterarSenhaSubmit(dados) {
    // token + email + dados
    let alterar = this.props.match.params
    let alterarSenha = {
      email: alterar.email,
      novaSenha: dados.senha,
      token: alterar.token

    }
    this.props.alterarSenha(alterarSenha)
  }

  render() {
    let alterar = this.props.match.params
    return (
      <LoginPagina>
        <Form 
          erro={this.props.erro}
          alterarSenhaSubmit={(dados) => this.alterarSenhaSubmit(dados)}
          alterando={this.props.alterando}
          email={alterar.email}
          jaAlterado={this.props.jaAlterado}
          irParaLogin={() => this.irParaLogin()} />
      </LoginPagina>)
  }
}

function mapStateToProps({ errosStateTree, authStateTree }) {
  return {
    erro: errosStateTree.erro,
    alterando: authStateTree.alterando,
    jaAlterado: authStateTree.jaAlterado

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    alterarSenha,
    limparErros
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ValidarCadastro))