import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginForm from '../form/LoginForm'
import { fazerLogin } from '../../../state/autenticacao/AuthActions'
import { limparErros } from '../../../state/erros/ErrosActions'

class Login extends Component {

  onLoginSubmit(formData) {
    this.props.limparErros()
    let login = {
      username: formData.login,
      password: formData.senha
    }
    this.props.fazerLogin(login)
  }
  
  componentDidMount() {
    // limpar algum erro anterior
    this.props.limparErros()
  }
  

  ativarCadastro() {
    this.props.history.push("/ativar/cadastro")
  }

  esqueciSenha() {
    this.props.history.push("/esqueci/senha")
  }  
  

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={{
        pathname: '/'
      }} />
    } else
      return (
        <LoginForm 
            erro={this.props.erro}
            onLoginSubmit={(formData) => this.onLoginSubmit(formData)}
            esqueciSenha={() => this.esqueciSenha()}
            ativarCadastro={() => this.ativarCadastro()} />
      )
  }

  irParaAdminSeAutorizado() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/")
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fazerLogin: fazerLogin,
    limparErros: limparErros
  }, dispatch)
}


function mapStateToProps({ errosStateTree, authStateTree }) {
  return {
    erro: errosStateTree.erro,
    isAuthenticated: authStateTree.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
