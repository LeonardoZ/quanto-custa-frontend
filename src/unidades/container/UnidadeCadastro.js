import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarUnidade, processarUnidade,
  atualizarUnidade, editarUnidade
} from '../../state/unidades_de_software/UnidadesActions'
import OrcamentoNaoDefinido from '../../util/orcamento_nao_definido/OrcamentoNaoDefinido'
import UnidadeCadastroPagina from '../pagina/UnidadeCadastroPagina'
import OrcamentoUnidadeHeader from '../../util/orcamento_header/OrcamentoHeader'
import OrcamentoUnidadeForm from '../form/UnidadeForm'
import Carregando from '../../util/carregando/CarregandoPanel'

class UnidadeCadastro extends Component {

  salvarUnidade(unidade) {
    this.props.processarUnidade()
    if (this.props.unidadeAtiva.uuid) {
      this.props.atualizarUnidade(this.props.unidadeAtiva, unidade)
    } else {
      this.props.salvarUnidade(this.props.orcamento, unidade)
    }

    this.props.history.push("/artefatos")
  }

  voltarAoInicio() {
    this.props.history.push("/")
  }

  render() {
    let orcamentoCarregando = this.props.carregandoOrcamento && !this.props.orcamento.uuid
    let orcamenoNaoDefinido = !this.props.carregandoOrcamento && !this.props.orcamento.uuid

    if (orcamentoCarregando) {
      return <Carregando carregando={this.props.carregandoOrcamento} />
    } else if (orcamenoNaoDefinido) {
      return <OrcamentoNaoDefinido
        voltarAoInicio={() => this.voltarAoInicio()} />
    } else
      return (
        <UnidadeCadastroPagina>
          <OrcamentoUnidadeHeader
            orcamento={this.props.orcamento}
            unidade={this.props.unidadeAtiva}
            titulo="Cadastro de Unidade de Software" />
          <OrcamentoUnidadeForm
            unidadeAtiva={this.props.unidadeAtiva}
            salvarUnidade={(dados) => this.salvarUnidade(dados)} />
        </UnidadeCadastroPagina>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    processarUnidade,
    salvarUnidade,
    atualizarUnidade,
    editarUnidade
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree, unidadesStateTree }) {
  return {
    carregandoOrcamento: orcamentoStateTree.carregandoOrcamento,
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: unidadesStateTree.unidadeAtiva
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnidadeCadastro))
