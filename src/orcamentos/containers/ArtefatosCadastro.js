import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import {
  salvarArtefato, getArtefatos
} from '../../actions/OrcamentoActions'
import OrcamentoUnidadeHeader from '../components/OrcamentoUnidadeHeader'
import OrcamentoArtefatoForm from '../components/OrcamentoArtefatoForm'
import ArtefatoItems from '../components/ArtefatosItems'
import UnidadeNaoDefinida from '../components/UnidadeNaoDefinida'
import OrcamentoNaoDefinido from '../components/OrcamentoNaoDefinido'
import FinalizarUnidade from '../components/FinalizarUnidade'


class ArtefatosCadastro extends Component {

  componentWillMount() {
    this.props.getArtefatos(this.props.unidadeAtiva)
  }

  salvarArtefato(artefato) {
    this.props.salvarArtefato(this.props.unidadeAtiva, artefato)
  }

  editarArtefato(artefato) {
  }

  finalizarUnidade() {
    this.props.history.push("/orcamento/ativo")
  }


  voltarAoInicio() {
    this.props.history.push("/")
  }

  render() {
    if (!this.props.orcamento.uuid) {
      return <OrcamentoNaoDefinido voltarAoInicio={() => this.voltarAoInicio()} />
    } else if (!this.props.unidadeAtiva.uuid) {
      return <UnidadeNaoDefinida voltarAoInicio={() => this.voltarAoInicio()} />
    }
    return (
      <Row className="show-grid">
        <Col sm={12} md={12}>
          <OrcamentoUnidadeHeader orcamento={this.props.orcamento}
            unidadeAtiva={this.props.unidadeAtiva} />
          <FinalizarUnidade onFinish={() => this.finalizarUnidade()} 
              canFinish={this.props.artefatos.length > 0}/>
          <OrcamentoArtefatoForm
            salvarArtefato={(artefato) => this.salvarArtefato(artefato)}
            finalizarUnidade={() => this.finalizarUnidade()}
            unidadeAtiva={this.props.unidadeAtiva}
            artefatos={this.props.artefatos} />
          <Row className="show-grid">
            <ArtefatoItems artefatos={this.props.artefatos}
              editarArtefato={(artefato) => this.editarArtefato(artefato)} />
          </Row>
        </Col>
      </Row>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarArtefato, getArtefatos
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: orcamentoStateTree.unidadeAtiva,
    artefatos: orcamentoStateTree.artefatos
      .filter((a) => a.unidadeUuid === orcamentoStateTree.unidadeAtiva.uuid),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtefatosCadastro))
