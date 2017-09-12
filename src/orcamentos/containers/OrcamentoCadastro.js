import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MyInput } from '../../formulario/FormGroup'
import Formsy from 'formsy-react'
import {
  salvarOrcamento, atualizarOrcamento,
  novaUnidadeDeSoftware, carregarUnidades,
} from '../../actions/OrcamentoActions'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const style = {
  padding: 12
}

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
      <RaisedButton secondary={true} label={'Próximo'} onClick={() => this.proximo()} />
      : ""

    return (
      <Row>
        <Col xs={6} xsOffset={3}>
          <Paper style={style}>
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
                <RaisedButton primary={true} type="submit"
                  label={this.state.textoEstadoPagina || "Aguarde"}
                  disabled={!this.state.canSubmit} />
                {btnNext}
              </div>
            </Formsy.Form>
          </Paper>
        </Col>
      </Row>
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
