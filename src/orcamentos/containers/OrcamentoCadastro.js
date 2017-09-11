import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Col, Row, Well } from 'react-bootstrap'
import { MyInput } from '../../formulario/FormGroup'
import Formsy from 'formsy-react'
import {
  salvarOrcamento, atualizarOrcamento,
  novaUnidadeDeSoftware, carregarUnidades,
} from '../../actions/OrcamentoActions'

class OrcamentoCadastro extends Component {

  constructor() {
    super()
    this.disableButton = this.disableButton.bind(this)
    this.submit = this.submit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.editarOrcamento = this.editarOrcamento.bind(this)
    this.proximo = this.proximo.bind(this)
  }

  componentWillMount() {
    this.setState({ canSubmit: false })
  }

  componentDidMount() {
    let orcamento = this.props.orcamento;
    let orcamentoEmAndamento = orcamento.nome || orcamento.responsavel || orcamento.cliente;
    this.setState({
      canSubmit: false,
      textoEstadoPagina: orcamentoEmAndamento ? "Atualizar" : "Próximo"
    })
    if (orcamento.uuid) {
      this.props.carregarUnidades(orcamento)
    }
  }

  submit(data) {
    if (this.props.orcamento.uuid) {
      this.props.atualizarOrcamento(this.props.orcamento, data)
    } else {
      this.props.salvarOrcamento(data)
    }
    this.proximo()

  }

  editarOrcamento(orcamento) {
    this.props.history.push('/unidade')
  }

  proximo() {
    if (this.props.unidades.length === 0) {
      this.props.history.push('/unidade')
    } else {
      this.props.history.push('/orcamento/ativo')
    }
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  render() {
    let visible = this.props.orcamento.uuid !== undefined
    let btnNext = (visible) ?
      <Button  bsStyle="success" onClick={() => this.proximo()}>Próximo</Button>
      : ""
    return (
      <div>
        <Row className="show-grid">
          <Col sm={12} md={8} mdOffset={2}>
            <Well>
              <h1>Orçamento</h1>
              <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}
                className="login">
                <MyInput name="nome" title="Nome" validations="maxLength:120,minLength:3"
                  validationErrors={{
                    minLength: "O nome do projeto não de possuir menos de 3 caractéres",
                    maxLength: "O nome do projeto não de possuir mais de 120 caractéres"
                  }} required value={this.props.orcamento.nome} />
                <MyInput name="cliente" title="Cliente" validations="maxLength:120,minLength:3"
                  validationErrors={{
                    minLength: "O nome do cliente não de possuir menos de 3 caractéres",
                    maxLength: "O nome do cliente não de possuir mais de 120 caractéres"
                  }} required value={this.props.orcamento.cliente} />
                <MyInput name="responsavel" title="Responsável" validations="maxLength:120,minLength:3"
                  validationErrors={{
                    minLength: "O nome do responsável não de possuir menos de 3 caractéres",
                    maxLength: "O nome do responsável não de possuir mais de 120 caractéres"
                  }} required value={this.props.orcamento.responsavel} />
                <div>
                  <Button type="submit" bsStyle="info" disabled={!this.state.canSubmit}>{this.state.textoEstadoPagina}</Button>
                  {btnNext}
                </div>
              </Formsy.Form>
            </Well>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarOrcamento, atualizarOrcamento,
    novaUnidadeDeSoftware, carregarUnidades
  }, dispatch)
}

function mapStateToProps({ orcamentoStateTree }) {
  return {
    orcamento: orcamentoStateTree.orcamento,
    unidades: orcamentoStateTree.unidades.filter(u => u.orcamentoUuid === orcamentoStateTree.orcamento.uuid)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrcamentoCadastro))
