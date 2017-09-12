import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  salvarArtefato, getArtefatos,
  editarArtefato, atualizarArtefato,
  novoArtefato
} from '../../actions/OrcamentoActions'
import OrcamentoUnidadeHeader from '../components/OrcamentoUnidadeHeader'
import OrcamentoArtefatoForm from '../components/OrcamentoArtefatoForm'
import ArtefatoItems from '../components/ArtefatosItems'
import UnidadeNaoDefinida from '../components/UnidadeNaoDefinida'
import OrcamentoNaoDefinido from '../components/OrcamentoNaoDefinido'
import FinalizarUnidade from '../components/FinalizarUnidade'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'

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
    this.props.history.push("/orcamento/ativo")
  }

  voltarAoInicio() {
    this.props.history.push("/")
  }

  novoArtefato() {
    this.props.novoArtefato()
  }

  render() {
    // if (!this.props.orcamento.uuid) {
    //   return <OrcamentoNaoDefinido voltarAoInicio={() => this.voltarAoInicio()} />
    // } else if (!this.props.unidadeAtiva.uuid) {
    //   return <UnidadeNaoDefinida voltarAoInicio={() => this.voltarAoInicio()} />
    // }
    return (
      <Row>
        <Col sm={12} md={12}>
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
        </Col>
      </Row>
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


function mapStateToProps({ orcamentoStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: orcamentoStateTree.unidadeAtiva,
    artefatoAtivo: orcamentoStateTree.artefatoAtivo,
    artefatos: orcamentoStateTree.artefatos
      .filter((a) => a.unidadeUuid === orcamentoStateTree.unidadeAtiva.uuid),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtefatosCadastro))
