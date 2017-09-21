import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarOrcamento, novaUnidadeDeSoftware,
  editarUnidade, carregarUnidades,
  configurarUnidadeParaAtiva
} from '../../actions/OrcamentoActions'
import UnidadesList from '../list/UnidadesList'
import OrcamentoHeader from '../../util/orcamento_header/OrcamentoHeader'
import Pagina from '../pagina/ResumoOrcamentoPagina'
import ButtonBar from '../button_bar/ButtonBar'

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

  render() {
    if (!this.props.unidades) {
      return <p>Carregando unidades...</p>
    }
    return (
      <Pagina>
        <OrcamentoHeader orcamento={this.props.orcamento} />
        <ButtonBar
          novaUnidade={() => this.novaUnidade()}
          editarOrcamento={() => this.editarOrcamento()}
          finalizarOrcamento={() => this.finalizarOrcamento()} />
        <UnidadesList
          unidades={this.props.unidades}
          editarCallback={(unidade) => this.editarUnidadeCallback(unidade)}
          artefatosCallback={(unidade) => this.artefatosCallback(unidade)}
        />
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
    unidades: unidadesStateTree.unidades
      .filter(u => u.orcamentoUuid === orcamentoStateTree.orcamento.uuid)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumoOrcamento))
