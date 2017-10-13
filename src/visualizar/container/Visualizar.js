import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pagina from '../pagina/VisualizarPagina'
import Total from '../../util/total/Total'
import OrcamentoHeader from '../../util/orcamento_header/OrcamentoHeader'
import PainelPagamento from '../../util/painel_pagamento/PainelPagamento'
import {
  carregarUnidades, processarUnidade
} from '../../state/unidades_de_software/UnidadesActions'
import {
  carregaPagamento, calcularPagamento
} from '../../state/pagamentos/PagamentosActions'
import Carregando from '../../util/carregando/CarregandoPanel'


class Pagamento extends Component {

  componentWillMount() {
    this.setState({ podeFinalizar: false })    
    this.props.processarUnidade()
    this.props.carregarUnidades(this.props.orcamento)
    this.props.carregaPagamento(this.props.orcamento)
  }

  componentDidMount() {
  }

  render() {
    if (this.props.processandoUnidade) {
      return <Carregando carregando={this.props.processandoUnidade} />
    }
    return (
      <Pagina>
        <OrcamentoHeader
          orcamento={this.props.orcamento}
          subtitulo="Orçamento"
          completo={true} />
        <Total
          unidades={this.props.unidades} />
        <PainelPagamento 
          pagamento={this.props.pagamento} />
      </Pagina>)
  }
}

function mapStateToProps({ orcamentoStateTree, unidadesStateTree, pagamentosStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidades: unidadesStateTree.unidades,
    pagamento: pagamentosStateTree.pagamentoAtivo,
    calculado: pagamentosStateTree.calculado,
    processandoUnidade: unidadesStateTree.processandoUnidade
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    processarUnidade, 
    carregarUnidades,
    carregaPagamento,
    calcularPagamento
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pagamento))

