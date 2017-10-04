import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarArtefato, getArtefatos, carregandoArtefatos,
  editarArtefato, atualizarArtefato, novoArtefato
} from '../../state/artefatos/ArtefatosActions'
import { cadastroArtefatos } from '../../state/stepper/StepperActions'
import OrcamentoArtefatoForm from '../form/OrcamentoArtefatoForm'
import OrcamentoUnidadeHeader from '../../util/orcamento_header/OrcamentoHeader'
import ArtefatoItems from '../list/ArtefatosList'
import UnidadeNaoDefinida from '../../util/unidade_nao_definida/UnidadeNaoDefinida'
import OrcamentoNaoDefinido from '../../util/orcamento_nao_definido/OrcamentoNaoDefinido'
import FinalizarUnidade from '../finalizar/FinalizarUnidadeArtefatos'
import CadastrarArtefatosPagina from '../pagina/CadastrarArtefatosPagina'
import Carregando from '../../util/carregando/CarregandoPanel'

class ArtefatosCadastro extends Component {

  componentWillMount() {
    if (this.props.unidadeAtiva.uuid) {
      this.props.getArtefatos(this.props.unidadeAtiva)
      this.props.cadastroArtefatos()
    }
    this.setState({ artefatoAtivo: { nome: "", custo: 0.0 } })
  }

  salvarArtefato(artefato) {
    if (this.props.artefatoAtivo.uuid) {
      this.props.atualizarArtefato(this.props.artefatoAtivo, artefato)
    } else {
      this.props.salvarArtefato(this.props.unidadeAtiva, artefato)
    }
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

  componentDidUpdate(prevProps, prevState) {
    // TODO revisar lógica para evitar chamadas desnecessárias
    if (!this.props.unidadeAtiva) return
    let unidadeVazia = this.props.unidadeAtiva === {}
    if (unidadeVazia) return

    let unidadeCarregadaEArtefatosNaoCarregados = !this.props.processandoUnidade
      && this.props.unidadeAtiva.uuid
      && !this.props.carregadoMasVazio
      && !this.state.carregando
      && this.props.artefatos.length === 0
    if (unidadeCarregadaEArtefatosNaoCarregados) {
      this.setState({carregando: true})
      this.props.carregandoArtefatos()
      this.props.carregandoArtefatos()
      this.props.getArtefatos(this.props.unidadeAtiva)
    }
  }

  render() {
    let esperandoUnidade = this.props.processandoUnidade && !this.props.unidadeAtiva.uuid
    let orcamentoNaoDefinido = !this.props.orcamento.uuid
    let unidadeNaoDefinida = !this.props.processandoUnidade && !this.props.unidadeAtiva.uuid
    let unidadeCarregadaEArtefatosNaoCarregados =
      !this.props.processandoUnidade
      && this.props.unidadeAtiva.uuid
      && !this.props.carregadoMasVazio
      && this.props.artefatos.length === 0

    if (esperandoUnidade) {
      return <Carregando carregando={this.props.processandoUnidade} />
    } else if (orcamentoNaoDefinido) {
      return <OrcamentoNaoDefinido voltarAoInicio={() => this.voltarAoInicio()} />
    } else if (unidadeNaoDefinida) {
      return <UnidadeNaoDefinida voltarAoInicio={() => this.voltarAoInicio()} />
    } else if (unidadeCarregadaEArtefatosNaoCarregados) {
      return <Carregando carregando={this.props.carregandoArtefatosState} />
    }
    return (
      <CadastrarArtefatosPagina>
        <OrcamentoUnidadeHeader orcamento={this.props.orcamento}
          titulo="Artefatos da Unidade de software"
          unidade={this.props.unidadeAtiva} />
        <FinalizarUnidade onFinish={() => this.finalizarUnidade()}
          canFinish={this.props.artefatos.length > 0} />
        <OrcamentoArtefatoForm
          salvarArtefato={(artefato) => this.salvarArtefato(artefato)}
          novoArtefato={() => this.props.novoArtefato()}
          finalizarUnidade={() => this.finalizarUnidade()}
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
    novoArtefato, carregandoArtefatos,
    cadastroArtefatos
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree, unidadesStateTree, artefatosStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: unidadesStateTree.unidadeAtiva,
    processandoUnidade: unidadesStateTree.processandoUnidade,
    carregandoArtefatosState: unidadesStateTree.carregandoArtefatos,
    carregadoMasVazio: artefatosStateTree.carregadoMasVazio,
    artefatoAtivo: artefatosStateTree.artefatoAtivo,
    artefatos: artefatosStateTree.artefatos
      .filter((a) => a.unidadeUuid === unidadesStateTree.unidadeAtiva.uuid)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtefatosCadastro))
