import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import { getOrcamentos, editarOrcamento, novoOrcamento } from '../../actions/OrcamentoActions'
import OrcamentoList from '../components/OrcamentosList'

class OrcamentosPanelComponent extends Component {

  componentWillMount() {
    this.props.getOrcamentos()
  }

  novoOrcamento() {
    this.props.novoOrcamento()
    this.props.history.push("/orcamento")
  }

  editarOrcamento(orcamento) {
    this.props.editarOrcamento(orcamento);
    this.props.history.push("/orcamento")
  }

  render() {
    let orcamentos = this.props.orcamentos
    if (!orcamentos.length || orcamentos.length === 0) {
      return <p className={"helper-block"}>Nenhum orçamento registrado.</p>
    }
    return (
      <div>
        <Row className="show-grid">
          <Col sm={12} md={12}>
            <Button onClick={() => this.novoOrcamento()} className="btn btn-primary" bsSize="large">
              Novo Orçamento
            </Button>
          </Col>
        </Row>
        <OrcamentoList orcamentos={orcamentos} 
              editarOrcamento={(orcamento) => this.editarOrcamento(orcamento)} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOrcamentos, editarOrcamento, novoOrcamento }, dispatch)
}

function mapStateToProps(state) {
  return {
    orcamentos: state.orcamentoStateTree.orcamentos
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentosPanelComponent))
