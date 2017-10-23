import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { salvarOrcamento } from '../../state/orcamentos/OrcamentosActions'
import {
  novaUnidadeDeSoftware,
  editarUnidade,
  carregarUnidades, 
  configurarUnidadeParaAtiva,
  removerUnidade
} from '../../state/unidades_de_software/UnidadesActions'
import { finalizarUnidades } from '../../state/stepper/StepperActions'
import UnidadesList from '../list/UnidadesList'
import OrcamentoHeader from '../../util/orcamento_header/OrcamentoHeader'
import Pagina from '../pagina/ResumoOrcamentoPagina'
import ButtonBar from '../button_bar/ButtonBar'
import OrcamentoNaoDefinido from '../../util/orcamento_nao_definido/OrcamentoNaoDefinido'
import RemoverRegistro from '../../util/remover_registro/RemoverRegistro'

class ResumoOrcamento extends Component {

  constructor(props) {
    super(props)
    this.editarUnidadeCallback = this.editarUnidadeCallback.bind(this)
  }

  componentWillMount() {
    let orcamento = this.props.orcamento;
    if (!orcamento.nome || !orcamento.cliente || !orcamento.responsavel) {
      this.props.history.push("/orcamento")
    } else {
      this.props.carregarUnidades(orcamento)
    }
    this.props.finalizarUnidades()
    this.setState({ removerUnidade: false })
  }

  novaUnidade() {
    this.props.novaUnidadeDeSoftware()
    this.props.history.push("/unidade");
  }

  editarOrcamento() {
    this.props.history.push("/orcamento")
  }

  editarUnidadeCallback(unidade) {
    this.props.editarUnidade(unidade)
    this.props.history.push("/unidade")
  }

  artefatosCallback(unidade) {
    this.props.configurarUnidadeParaAtiva(unidade)
    this.props.history.push("/artefatos")
  }

  irParaPagamento() {
    this.props.history.push("/pagamento")
  }

  voltarAoInicio() {
    this.props.history.push("/")
  }

  selecionarParaRemover(unidade) {
    this.props.configurarUnidadeParaAtiva(unidade)
    this.setState({ removerUnidade: true })
  }

  aoRemoverUnidade() {
    this.props.removerUnidade(this.props.unidadeAtiva)
    this.setState({ removerUnidade: false })
  }

  render() {
    let orcamenoNaoDefinido = !this.props.carregandoOrcamento && !this.props.orcamento.uuid

    if (orcamenoNaoDefinido) {
      return <OrcamentoNaoDefinido
        voltarAoInicio={() => this.voltarAoInicio()} />
    }
    return (
      <Pagina>
        <OrcamentoHeader orcamento={this.props.orcamento} titulo="Resumo do Orçamento" />
        <ButtonBar
          novaUnidade={() => this.novaUnidade()}
          editarOrcamento={() => this.editarOrcamento()}
          irParaPagamento={() => this.irParaPagamento()} />
        <RemoverRegistro
          abrirModal={this.state.removerUnidade}
          titulo={this.props.unidadeAtiva ? this.props.unidadeAtiva.titulo : ""}
          texto="Deseja remover a Unidade de Software?"
          aoRemover={() => this.aoRemoverUnidade()} />
        <UnidadesList
          unidades={this.props.unidades}
          editarCallback={(unidade) => this.editarUnidadeCallback(unidade)}
          artefatosCallback={(unidade) => this.artefatosCallback(unidade)}
          remover={(unidade) => this.selecionarParaRemover(unidade)} />
      </Pagina>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarOrcamento,
    novaUnidadeDeSoftware,
    editarUnidade,
    removerUnidade,
    carregarUnidades,
    configurarUnidadeParaAtiva,
    finalizarUnidades
  }, dispatch)
}

function mapStateToProps({ orcamentoStateTree, unidadesStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    carregandoOrcamento: orcamentoStateTree.carregandoOrcamento,
    unidades: unidadesStateTree.unidades
      .filter(u => u.orcamentoUuid === orcamentoStateTree.orcamento.uuid),
    processandoUnidades: unidadesStateTree.processandoUnidades,
    unidadeAtiva: unidadesStateTree.unidadeAtiva
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumoOrcamento))
