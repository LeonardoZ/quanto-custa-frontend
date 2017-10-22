import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import MoneyInput from '../../util/formulario/money_input/MoneyInput'
import PercentInput from '../../util/formulario/percent_input/PercentInput'
import IntInput from '../../util/formulario/int_input/IntInput'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

const colStyle = {
  marginTop: "8px"
}

const style = {
  padding: "8px",
}

class PagamentoForm extends Component {

  constructor(props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.submit = this.submit.bind(this)
    this.enableButton = this.enableButton.bind(this)
  }

  componentWillReceiveProps({ pagamentoAtivo }) {
    this.renderizarValores(pagamentoAtivo)
    this.validar(pagamentoAtivo)
  }

  renderizarValores(pagamentoAtivo, callback = () => { }) {
    if (pagamentoAtivo) {
      this.setState({
        pagamentoEmVezes: pagamentoAtivo.pagamentoEmVezes,
        jurosMensaisPercentuais: pagamentoAtivo.jurosMensaisPercentuais,
        entrada: pagamentoAtivo.entrada,
        descontoAVistaPercentual: pagamentoAtivo.descontoAVistaPercentual
      }, () => { callback() })
    }
  }

  componentWillMount() {
    this.setState({ canSubmit: false, ehParcelado: false })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  validar(pagamentoAtivo) {
    if (!pagamentoAtivo) return
    let vezesValido = pagamentoAtivo.pagamentoEmVezes && pagamentoAtivo.pagamentoEmVezes < 12
    let jurosMensaisValido = pagamentoAtivo.jurosMensaisPercentuais ? true : false
    let entradaValida = pagamentoAtivo.entrada ? true : false
    let descontoAVistaValido = pagamentoAtivo.descontoAVistaPercentual ? true : false
    this.setState({ canSubmit: vezesValido && jurosMensaisValido && entradaValida && descontoAVistaValido })
    this.setState({ ehParcelado: pagamentoAtivo.pagamentoEmVezes > 1 })
    if (!this.props.pagamentoInvalido) {
      this.props.aoMudar()
    }
  }

  avaliaPagamentoEhValido() {
    this.renderizarValores(this.state, () => this.props.avaliaPagamentoEhValido(this.state))
  }

  submit(dados) {
    this.props.submitPagamento({
      pagamentoEmVezes: this.state.pagamentoEmVezes || 1,
      jurosMensaisPercentuais: this.state.jurosMensaisPercentuais || 0.0,
      entrada: this.state.entrada || 0.0,
      descontoAVistaPercentual: this.state.descontoAVistaPercentual || 0.0
    })
  }

  componentesDeParcelado() {
    return (
      <Col xs={12}>
        <Row>
          <Col xs={12} md={6}>
            <IntInput
              name="pagamentoEmVezes"
              floatingLabelText="Número de parcelas"
              fullWidth={true}
              value={this.state.pagamentoEmVezes}
              onChange={(e, values) => {
                this.setState({ pagamentoEmVezes: values.floatValue }, () => {
                  this.validar(this.state)
                })
              }} />
          </Col>

          <Col xs={12} md={6}>
            <MoneyInput
              name="entrada"
              fullWidth={true}
              floatingLabelText="Valor de entrada (R$)"
              value={this.state.entrada}
              onChange={(e, values) => {
                this.setState({ entrada: values.floatValue }, () => {
                  this.validar(this.state)
                })
              }} />
          </Col>

          <Col xs={12} md={6}>
            <PercentInput
              name="jurosMensaisPercentuais"
              fullWidth={true}
              floatingLabelText="Juros Mensais (%)"
              value={this.state.jurosMensaisPercentuais}
              onChange={(e, values) => {
                this.setState({ jurosMensaisPercentuais: values.floatValue }, () => {
                  this.validar(this.state)
                })
              }} />
          </Col>
        </Row>
      </Col>)
  }

  componentesDePagamentoUnico() {
    return (
      <Col xs={12}>
        <Row>
          <Col xs={12} md={6}>
            <IntInput
              name="pagamentoEmVezes"
              floatingLabelText="Número de parcelas"
              fullWidth={true}
              value={this.state.pagamentoEmVezes}
              onChange={(e, values) => {
                this.setState({ pagamentoEmVezes: values.floatValue }, () => {
                  this.validar(this.state)
                })
              }} />
          </Col>

          <Col xs={12} md={6}>
            <PercentInput
              name="descontoAVistaPercentual"
              fullWidth={true}
              floatingLabelText="Desconto à vista (%)"
              value={this.state.descontoAVistaPercentual}
              onChange={(e, values) => {
                this.setState({ descontoAVistaPercentual: values.floatValue }, () => {
                  this.validar(this.state)
                })
              }} />
          </Col>
        </Row>
      </Col >)
  }

  render() {
    let items = this.state.ehParcelado ?
      this.componentesDeParcelado() :
      this.componentesDePagamentoUnico()

    return (
      <Col xs={12} style={colStyle}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Pagamento" />
          </ToolbarGroup>
        </Toolbar>
        <Paper zDepth={1} rounded={false} style={style}>
          <Formsy.Form
            ref={(event) => { this.artefatoForm = event }}
            onSubmit={this.submit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}>
            <Row>
              {items}
            </Row>
            <Row end="xs">
              <Col xs={12} md={12}>
                <RaisedButton
                  primary={true}
                  onClick={() => this.props.pagamentoInvalido ? this.avaliaPagamentoEhValido() : {}}
                  type={this.props.pagamentoInvalido ? "button" : "submit"}
                  label={this.props.pagamentoInvalido ? "Validar" : "Salvar"} />
              </Col>
            </Row>
          </Formsy.Form>
        </Paper>
      </Col>
    )
  }
}

export default PagamentoForm