import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginForm from '../components/LoginForm'
import { fazerLogin, limparErros } from '../../actions/OrcamentoActions'

class Login extends Component {

  onLoginSubmit(formData) {
    this.props.limparErros()
    let login = {
      username: formData.login,
      password: formData.senha
    }
    this.props.fazerLogin(login)
    this.irParaAdminSeAutorizado()
  }

  componentWillMount() {
    this.irParaAdminSeAutorizado()
  }

  render() {
    this.irParaAdminSeAutorizado()
    return (
      <LoginForm erro={this.props.erro} onLoginSubmit={(formData) => this.onLoginSubmit(formData)} />
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
