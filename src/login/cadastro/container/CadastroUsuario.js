import React, { Component } from 'react'
import { connect, bindAction } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import CadastroUsuarioForm from '../form/CadastroUsuarioForm'
import { cadastrarUsuario } from '../../../state/autenticacao/AuthActions'

class CadastroUsuario extends Component {

  cadastrarUsuario(dados) {
    this.props.cadastrarUsuario(dados)
    this.props.history.push("/confirmar")
  }

  render() {
    return <CadastroUsuarioForm cadastrarUsuarioSubmit={(dados) => this.cadastrarUsuario(dados)} />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cadastrarUsuario }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(CadastroUsuario))