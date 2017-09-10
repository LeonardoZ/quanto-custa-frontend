import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import {
  salvarUnidade, 
  atualizarUnidade, editarUnidade
} from '../../actions/OrcamentoActions'
import OrcamentoUnidadeHeader from '../components/OrcamentoUnidadeHeader'
import OrcamentoUnidadeForm from '../components/OrcamentoUnidadeForm'
import OrcamentoNaoDefinido from '../components/OrcamentoNaoDefinido'

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
      return <OrcamentoNaoDefinido voltarAoInicio={() => this.voltarAoInicio()} />
    } else
      return (
        <Row className="show-grid">
          <Col sm={12} md={12}>
            <OrcamentoUnidadeHeader
              orcamento={this.props.orcamento} />
            <OrcamentoUnidadeForm
              unidadeAtiva={this.props.unidadeAtiva}
              salvarUnidade={(data) => this.salvarUnidade(data)} />
          </Col>
        </Row>
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


function mapStateToProps({ orcamentoStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidadeAtiva: orcamentoStateTree.unidadeAtiva
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnidadeCadastro))