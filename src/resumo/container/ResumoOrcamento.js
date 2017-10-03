import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { salvarOrcamento } from '../../state/orcamentos/OrcamentosActions'
import {
  novaUnidadeDeSoftware, editarUnidade, 
  carregarUnidades, configurarUnidadeParaAtiva
} from '../../state/unidades_de_software/UnidadesActions'
import UnidadesList from '../list/UnidadesList'
import OrcamentoHeader from '../../util/orcamento_header/OrcamentoHeader'
import Pagina from '../pagina/ResumoOrcamentoPagina'
import ButtonBar from '../button_bar/ButtonBar'
import Carregando from '../../util/carregando/CarregandoPanel'
import OrcamentoNaoDefinido from '../../util/orcamento_nao_definido/OrcamentoNaoDefinido'

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

  finalizarOrcamento() {
    this.props.history.push("/")
  }

  voltarAoInicio() {
    this.props.history.push("/")
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
          finalizarOrcamento={() => this.finalizarOrcamento()} />
        <UnidadesList
          unidades={this.props.unidades}
          editarCallback={(unidade) => this.editarUnidadeCallback(unidade)}
          artefatosCallback={(unidade) => this.artefatosCallback(unidade)} />
      </Pagina>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarOrcamento,
    novaUnidadeDeSoftware,
    editarUnidade,
    carregarUnidades,
    configurarUnidadeParaAtiva
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
