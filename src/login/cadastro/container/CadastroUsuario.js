import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import CadastroUsuarioForm from '../form/CadastroUsuarioForm'
import { cadastrarUsuario, limparCadastro } from '../../../state/autenticacao/AuthActions'
import Redirecionar from '../redirecionar/Redirecionar'

class CadastroUsuario extends Component {

  cadastrarUsuario(dados) {
    this.props.cadastrarUsuario(dados)
  }

  redirecionar() {
    this.props.limparCadastro()
    this.props.history.push({
      pathname: "login",
      search: "?loginSelecionado=true"
    })
  }

  render() {
    if (this.props.cadastroSucesso) {
      return <Redirecionar redirecionar={() => this.redirecionar()}/>
    }
    return (
      <CadastroUsuarioForm
          erro={this.props.erro}  
          cadastrarUsuarioSubmit={(dados) => this.cadastrarUsuario(dados)} /> )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ cadastrarUsuario, limparCadastro }, dispatch)
}

function mapStateToProps({errosStateTree, authStateTree}) {
  return {
    erro: errosStateTree.erro,
    cadastroSucesso: authStateTree.cadastroSucesso
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CadastroUsuario))