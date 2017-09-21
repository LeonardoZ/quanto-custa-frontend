import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import { getOrcamentos, editarOrcamento, novoOrcamento } from '../../../actions/OrcamentoActions'
import OrcamentoList from '../orcamentos/list/OrcamentosList'

class OrcamentosPainel extends Component {

  componentDidMount() {
    if (this.props.usuario) {
      this.props.getOrcamentos(this.props.usuario)
    }
  }

  novoOrcamento() {
    this.props.novoOrcamento()
    this.props.history.push("/orcamento")
  }

  editarOrcamento(orcamento) {
    this.props.editarOrcamento(orcamento)
    this.props.history.push("/orcamento")
  }

  render() {
    let orcamentos = this.props.orcamentos

    return (
      <div>
        <RaisedButton label="Novo Orçamento" primary={true}
          onClick={() => this.novoOrcamento()} />

        <OrcamentoList orcamentos={orcamentos}
          editarOrcamento={(orcamento) => this.editarOrcamento(orcamento)} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOrcamentos, editarOrcamento, novoOrcamento }, dispatch)
}

function mapStateToProps(state) {
  return {
    orcamentos: state.orcamentoStateTree.orcamentos,
    usuario: state.authStateTree.usuarioAtivo
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentosPainel))
