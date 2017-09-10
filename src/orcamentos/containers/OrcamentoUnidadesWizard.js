import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import {
  salvarArtefato, getArtefatos,
  salvarUnidade, carregarUnidades,
  finalizarUnidade, atualizarUnidade
} from '../../actions/OrcamentoActions'
import ArtefatoItems from '../components/ArtefatosItems'
import OrcamentoUnidadeHeader from '../components/OrcamentoUnidadeHeader'
import OrcamentoUnidadeForm from '../components/OrcamentoUnidadeForm'
import OrcamentoArtefatoForm from '../components/OrcamentoArtefatoForm'

class OrcamentoUnidadesWizard extends Component {

  constructor(props) {
    super(props)
    this.aoSalvarCallback = this.aoSalvarCallback.bind(this)
    this.salvarUnidade = this.salvarUnidade.bind(this)
    this.salvarArtefato = this.salvarArtefato.bind(this)
  }

  componentWillMount() {
    let orcamento = this.props.orcamento;

    this.setState({
      editarUnidadeCompleto: false,
    })
  }

  componentDidMount() {
  }

  aoSalvarCallback() {
    this.setState({ editarUnidadeCompleto: true })
    this.props.carregarUnidades(this.props.orcamento)
  }

  salvarUnidade(unidade) {
    this.props.salvarUnidade(this.props.orcamento, unidade)
    this.props.carregarUnidades(this.props.orcamento)
  }

  salvarArtefato(artefato) {
    this.props.salvarArtefato(this.props.unidadeAtiva, artefato)
  }

  criarUnidade() {
    this.props.history.push("/orcamento/ativo")
  }

  editarArtefato(artefato) {
  }

  render() {
    if (this.props.orcamento === undefined) {
      return <p>Orçamento não definido</p>
    } else if (!this.state.editarUnidadeCompleto) {
      return (
        <div>
          <Row className="show-grid">
            <Col sm={12} md={12}>
              <OrcamentoUnidadeHeader
                orcamento={this.props.orcamento} />
              <OrcamentoUnidadeForm
                unidadeAtiva={this.props.unidadeAtiva}
                salvarUnidade={(data) => this.salvarUnidade(data)}
                aoSalvarCallback={() => this.aoSalvarCallback()} />
            </Col>
          </Row>
        </div>
      )
    } else {
      return (
        <div>
          <Row className="show-grid">
            <Col sm={12} md={12}>
              <OrcamentoUnidadeHeader orcamento={this.props.orcamento}
                unidadeAtiva={this.props.unidadeAtiva} />
              <OrcamentoArtefatoForm
                salvarArtefato={(artefato) => this.salvarArtefato(artefato)}
                finalizarUnidade={() => this.criarUnidade()}
                unidadeAtiva={this.props.unidadeAtiva}
                artefatos={this.props.artefatos} />
              <Row className="show-grid">
                <ArtefatoItems artefatos={this.props.artefatos} 
                    editarArtefato={(artefato) => this.editarArtefato(artefato)} />
              </Row>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarArtefato,
    getArtefatos,
    salvarUnidade,
    carregarUnidades,
    finalizarUnidade,
    atualizarUnidade
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidades: orcamentoStateTree.unidades,
    unidadeAtiva: orcamentoStateTree.unidadeAtiva,
    artefatos: orcamentoStateTree.artefatos
      .filter((a) => a.unidadeUuid === orcamentoStateTree.unidadeAtiva.uuid),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentoUnidadesWizard))
