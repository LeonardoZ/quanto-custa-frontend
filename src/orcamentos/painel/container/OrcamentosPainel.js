import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrcamentos, editarOrcamento, novoOrcamento, setCarregandoOrcamento }
  from '../../../state/orcamentos/OrcamentosActions'
import OrcamentoList from '../orcamentos/list/OrcamentosList'
import BotaoNovo from '../botao_novo/BotaoNovoOrcamento'
import CarregandoPanel from '../../../util/carregando/CarregandoPanel'
import Pagina from '../pagina/OrcamentoPanelPagina'

class OrcamentosPainel extends Component {

  componentWillMount() {
    if (this.props.usuario) {
      this.props.setCarregandoOrcamento()
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

  abrirResumo(orcamento) {
    this.props.editarOrcamento(orcamento)
    this.props.history.push("/resumo/orcamento")
  }

  render() {
    if (this.props.carregando) {
      return <CarregandoPanel carregando={this.props.carregando} />
    }
    let orcamentos = this.props.orcamentos

    return (
      <Pagina novoOrcamento={() => this.novoOrcamento()}>
        <OrcamentoList orcamentos={orcamentos}
          editarOrcamento={(orcamento) => this.editarOrcamento(orcamento)}
          abrirResumo={(orcamento) => this.abrirResumo(orcamento)} />
      </Pagina>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOrcamentos, editarOrcamento,
    novoOrcamento, setCarregandoOrcamento
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    carregando: state.orcamentoStateTree.carregandoOrcamento,
    orcamentos: state.orcamentoStateTree.orcamentos,
    usuario: state.authStateTree.usuarioAtivo
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentosPainel))
