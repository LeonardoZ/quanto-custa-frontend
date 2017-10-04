import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getOrcamentos, editarOrcamento, novoOrcamento, setCarregandoOrcamento, removerOrcamento }
  from '../../../state/orcamentos/OrcamentosActions'
import OrcamentoList from '../orcamentos/list/OrcamentosList'
import BotaoNovo from '../botao_novo/BotaoNovoOrcamento'
import CarregandoPanel from '../../../util/carregando/CarregandoPanel'
import Pagina from '../pagina/OrcamentoPanelPagina'
import RemoverRegistro from '../../../util/remover_registro/RemoverRegistro'

class OrcamentosPainel extends Component {

  componentWillMount() {
    if (this.props.usuario) {
      this.props.setCarregandoOrcamento()
      this.props.getOrcamentos(this.props.usuario)
    }
    this.setState({ remover: false })
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

  selecionarParaRemover(orcamento) {
    this.props.editarOrcamento(orcamento)
    this.setState({ remover: true })
  }

  aoRemoverCallback() {
    this.props.removerOrcamento(this.props.orcamento)    
    this.setState({ remover: false })
  }

  render() {
    if (this.props.carregando) {
      return <CarregandoPanel carregando={this.props.carregando} />
    }

    let orcamentos = this.props.orcamentos

    return (
      <Pagina novoOrcamento={() => this.novoOrcamento()}>
        <RemoverRegistro 
            abrirModal={this.state.remover} 
            titulo={this.props.orcamento ? this.props.orcamento.nome : ""}
            texto="Deseja remover completamente o Orçamento?"
            aoRemover={() => this.aoRemoverCallback()} />
        <OrcamentoList
          orcamentos={orcamentos}
          editarOrcamento={(orcamento) => this.editarOrcamento(orcamento)}
          abrirResumo={(orcamento) => this.abrirResumo(orcamento)}
          remover={(orcamento) => this.selecionarParaRemover(orcamento)} />
      </Pagina>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOrcamentos, 
    editarOrcamento,
    novoOrcamento, 
    setCarregandoOrcamento,
    removerOrcamento
  }, dispatch)
}

function mapStateToProps({orcamentoStateTree, authStateTree}) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    carregando: orcamentoStateTree.carregandoOrcamento,
    orcamentos: orcamentoStateTree.orcamentos,
    usuario: authStateTree.usuarioAtivo
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentosPainel))
