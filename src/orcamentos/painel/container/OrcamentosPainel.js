import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrcamentos, editarOrcamento, novoOrcamento }
  from '../../../state/orcamentos/OrcamentosActions'
import OrcamentoList from '../orcamentos/list/OrcamentosList'
import BotaoNovo from '../botao_novo/BotaoNovoOrcamento'

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
        <BotaoNovo novoOrcamento={()=> this.novoOrcamento()}/>
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
