import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Col, Row, ButtonGroup } from 'react-bootstrap'
import {
  salvarOrcamento, novaUnidadeDeSoftware,
  editarUnidade, carregarUnidades,
  configurarUnidadeParaAtiva
} from '../../actions/OrcamentoActions'
import UnidadesList from '../components/UnidadesList'
import OrcamentoHeader from '../components/OrcamentoHeader'

class OrcamentosParcialAtivo extends Component {

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

  componentDidMount() {

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
      <div>
        <Row className="show-grid">
          <Col sm={12} md={12}>
            <h1>Orçamento</h1>
            <OrcamentoHeader orcamento={this.props.orcamento} />
            <ButtonGroup>
              <Button onClick={() => this.novaUnidade()}>Nova Unidade de Software</Button>
              <Button className="btn btn-primary"
                onClick={() => this.editarOrcamento()}>Editar Orçamento</Button>
              <Button className="btn btn-danger pull-right"
                onClick={() => this.finalizarOrcamento()}>Finalizar Orçamento</Button>
            </ButtonGroup>
            <hr />
            <UnidadesList
              unidades={this.props.unidades}
              editarCallback={(unidade) => this.editarUnidadeCallback(unidade)} 
              artefatosCallback={(unidade) => this.artefatosCallback(unidade)} 
              />
          </Col>
        </Row>
      </div>
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

function mapStateToProps({ orcamentoStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidades: orcamentoStateTree.unidades
      .filter(u => u.orcamentoUuid === orcamentoStateTree.orcamento.uuid)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentosParcialAtivo))
