import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pagina from '../pagina/PagamentoPagina'
import Form from '../form/PagamentoForm'
import Total from '../../util/total/Total'
import ButtonBarAuxiliar from '../button_bar/ButtonBarAuxiliar'
import ButtonBarFinal from '../button_bar/ButtonBarFinal'
import OrcamentoHeader from '../../util/orcamento_header/OrcamentoHeader'
import {
  carregaPagamento,
  atualizarPagamento,
  configuraPagamentoAtivo,
  salvarPagamento,
  novoPagamento,
  removerPagamento,
  calcularPagamento,
  invalidarPagamento
} from '../../state/pagamentos/PagamentosActions'
import PainelPagamentoSimples from '../../util/painel_pagamento/PainelPagamentoSimples'
import RemoverRegistro from '../../util/remover_registro/RemoverRegistro'

class Pagamento extends Component {

  componentWillMount() {
    this.setState({ podeFinalizar: false, remover: false })
  }

  componentDidMount() {
    this.props.carregaPagamento(this.props.orcamento)
    this.verSePodeFinalizar()
  }

  verSePodeFinalizar() {
    let finalizaSeJaFoiSalvo = this.props.pagamentoAtivo.orcamentoUuid
    this.setState({ podeFinalizar: finalizaSeJaFoiSalvo })
  }

  processarPagamento(dados) {
    if (this.props.pagamentoAtivo.orcamentoUuid) {
      this.props.atualizarPagamento(dados, this.props.orcamento)
    } else {
      this.props.salvarPagamento(dados, this.props.orcamento)
    }
  }

  revisar() {
    this.props.history.push("/resumo/orcamento")
  }

  finalizar() {
    this.props.history.push("/ver/orcamento")
  }

  novo() {
    this.props.novoPagamento()
  }

  avaliaPagamentoEhValido(pagamento) {
    this.props.calcularPagamento(pagamento, this.props.orcamento)
  }

  remover() {
    this.props.configuraPagamentoAtivo(this.props.pagamentoAtivo)
    this.setState({ remover: true })
  }

  aoRemoverCallback() {
    this.props.removerPagamento(this.props.pagamentoAtivo)
    this.setState({ remover: false })
  }

  render() {
    return (
      <Pagina>
        <RemoverRegistro
          abrirModal={this.state.remover}
          titulo="Remover pagamento"
          texto="Deseja remover os dados do Pagamento?"
          aoRemover={() => this.aoRemoverCallback()} />
        <OrcamentoHeader
          orcamento={this.props.orcamento}
          subtitulo="Orçamento" />
        <Total
          unidades={this.props.unidades} />
        <ButtonBarAuxiliar
          removerAtivo={this.props.pagamentoAtivo.orcamentoUuid ? true : false}
          novo={() => this.novo()}
          remover={() => this.remover()} />
        <Form
          pagamentoInvalido={this.props.pagamentoInvalido}
          pagamentoAtivo={this.props.pagamentoAtivo}
          aoMudar={() => this.props.invalidarPagamento()}
          avaliaPagamentoEhValido={(pagamento) => this.avaliaPagamentoEhValido(pagamento)}
          submitPagamento={(dados) => this.processarPagamento(dados)}
          calcularPagamento={() => this.calcularPagamento()} />
        <PainelPagamentoSimples
          calculoPagamento={this.props.calculoPagamento}
          pagamentoInvalido={this.props.pagamentoInvalido}
          pagamentoInvalidoMensagem={this.props.pagamentoInvalidoMensagem} />
        <ButtonBarFinal
          podeFinalizar={this.props.pagamentoAtivo && this.props.pagamentoAtivo.orcamentoUuid ? true : false}
          revisar={() => this.revisar()}
          finalizar={() => this.finalizar()} />
      </Pagina>)
  }
}

function mapStateToProps({ orcamentoStateTree, unidadesStateTree, pagamentosStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidades: unidadesStateTree.unidades,
    pagamentoAtivo: pagamentosStateTree.pagamentoAtivo,
    calculoPagamento: pagamentosStateTree.calculoPagamento,
    pagamentoInvalido: pagamentosStateTree.pagamentoInvalido,
    pagamentoInvalidoMensagem: pagamentosStateTree.pagamentoInvalidoMensagem
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    carregaPagamento,
    atualizarPagamento,
    configuraPagamentoAtivo,
    salvarPagamento,
    novoPagamento,
    removerPagamento,
    calcularPagamento,
    invalidarPagamento
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pagamento))

