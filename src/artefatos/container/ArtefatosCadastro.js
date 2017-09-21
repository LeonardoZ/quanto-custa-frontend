import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarArtefato, getArtefatos,
  editarArtefato, atualizarArtefato,
  novoArtefato
} from '../../actions/OrcamentoActions'
import OrcamentoUnidadeHeader from '../../util/orcamento_header/OrcamentoHeader'
import OrcamentoArtefatoForm from '../form/OrcamentoArtefatoForm'
import ArtefatoItems from '../list/ArtefatosList'
import UnidadeNaoDefinida from '../../util/unidade_nao_definida/UnidadeNaoDefinida'
import OrcamentoNaoDefinido from '../../util/orcamento_nao_definido/OrcamentoNaoDefinido'
import FinalizarUnidade from '../finalizar/FinalizarUnidadeArtefatos'
import CadastrarArtefatosPagina from '../pagina/CadastrarArtefatosPagina'

class ArtefatosCadastro extends Component {

  componentWillMount() {
    this.props.getArtefatos(this.props.unidadeAtiva)
    this.setState({ artefatoAtivo: { nome: "", custo: 0.0 } })
  }

  salvarArtefato(artefato) {
    if (this.props.artefatoAtivo.uuid) {
      this.props.atualizarArtefato(this.props.artefatoAtivo, artefato)
    } else {
      this.props.salvarArtefato(this.props.unidadeAtiva, artefato)
    }
    this.novoArtefato()
  }

  finalizarUnidade() {
    this.props.history.push("/resumo/orcamento")
  }

  voltarAoInicio() {
    this.props.history.push("/")
  }

  novoArtefato() {
    this.props.novoArtefato()
  }

  render() {
    if (!this.props.orcamento.uuid) {
      return <OrcamentoNaoDefinido voltarAoInicio={() => this.voltarAoInicio()} />
    } else if (!this.props.unidadeAtiva.uuid) {
      return <UnidadeNaoDefinida voltarAoInicio={() => this.voltarAoInicio()} />
    }
    return (
      <CadastrarArtefatosPagina>
        <OrcamentoUnidadeHeader orcamento={this.props.orcamento}
          unidadeAtiva={this.props.unidadeAtiva} />
        <FinalizarUnidade onFinish={() => this.finalizarUnidade()}
          canFinish={this.props.artefatos.length > 0} />
        <OrcamentoArtefatoForm
          salvarArtefato={(artefato) => this.salvarArtefato(artefato)}
          finalizarUnidade={() => this.finalizarUnidade()}
          novoArtefato={() => this.novoArtefato()}
          artefatoAtivo={this.props.artefatoAtivo}
          unidadeAtiva={this.props.unidadeAtiva}
          artefatos={this.props.artefatos} />
        <ArtefatoItems artefatos={this.props.artefatos}
          editarArtefato={(artefato) => this.props.editarArtefato(artefato)} />
      </CadastrarArtefatosPagina>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarArtefato, getArtefatos,
    editarArtefato, atualizarArtefato,
    novoArtefato
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree, unidadesStateTree, artefatosStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: unidadesStateTree.unidadeAtiva,
    artefatoAtivo: artefatosStateTree.artefatoAtivo,
    artefatos: artefatosStateTree.artefatos
      .filter((a) => a.unidadeUuid === unidadesStateTree.unidadeAtiva.uuid),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtefatosCadastro))
