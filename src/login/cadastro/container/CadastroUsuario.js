import React, { Component } from 'react'
import { connect, bindAction } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from 'actionCreatorPath'
import CadastroUsuarioForm from '../form/CadastroUsuarioForm'

class CadastroUsuario extends Component {

  render() {
    return <CadastroUsuarioForm />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CadastroUsuario)