import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarUnidade,
  atualizarUnidade, editarUnidade
} from '../../state/unidades_de_software/UnidadesActions'
import OrcamentoNaoDefinido from '../../util/orcamento_nao_definido/OrcamentoNaoDefinido'
import UnidadeCadastroPagina from '../pagina/UnidadeCadastroPagina'
import OrcamentoUnidadeHeader from '../header/UnidadeHeader'
import OrcamentoUnidadeForm from '../form/UnidadeForm'

class UnidadeCadastro extends Component {

  salvarUnidade(unidade) {
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
    if (!this.props.orcamento.uuid) {
      return <OrcamentoNaoDefinido
        voltarAoInicio={() => this.voltarAoInicio()} />
    } else
      return (
        <UnidadeCadastroPagina>
          <OrcamentoUnidadeHeader
            orcamento={this.props.orcamento} />
          <OrcamentoUnidadeForm
            unidadeAtiva={this.props.unidadeAtiva}
            salvarUnidade={(dados) => this.salvarUnidade(dados)} />
        </UnidadeCadastroPagina>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarUnidade,
    atualizarUnidade,
    editarUnidade
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree, unidadesStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: unidadesStateTree.unidadeAtiva
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnidadeCadastro))
