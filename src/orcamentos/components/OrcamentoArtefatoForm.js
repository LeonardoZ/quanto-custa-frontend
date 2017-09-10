import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Button, Col, Row, Well, FormGroup, ControlLabel } from 'react-bootstrap'
import { MyInput } from '../../formulario/FormGroup'
import NumberFormat from 'react-number-format'

class OrcamentoArtefatoForm extends Component {

  constructor(props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.submit = this.submit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.onFinish = this.onFinish.bind(this)
  }

  componentWillMount() {
    this.setState(
      {
        canSubmit: false,
        nome: "",
        valor: '0.0',
        custo: 0.0,
        valorFormatado: 'R$ 0,00',
        canFinish: this.props.artefatos.length > 0
      }
    )
  }

  onFinish() {
    this.props.finalizarUnidade()
  }

  submit(data) {
    let newData ={
        ...data,
        custo: this.state.valorFlutuante
    }
    this.props.salvarArtefato(newData)
    this.setState({
        canSubmit: false,
        nome: "",
        custo: 0.0,
        valor: '0.0',
        valorFormatado: 'R$ 0,00',
        canFinish: this.props.artefatos.length > 0
      })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col sm={12} md={12}>
            <Button type="submit" onClick={this.onFinish} disabled={!this.state.canFinish}
              className="btn btn-primary pull-right">Terminar Unidade de Software</Button>
          </Col>
        </Row>
        <Formsy.Form
          onSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <h3>Artefatos </h3>
          <Well>
            <Row className="show-grid">
              <Col sm={12} md={6}>
                <MyInput name="nome" title="Artefato"
                  validations="maxLength:150,minLength:3"
                  validationErrors={{
                    minLength: "O nome do artefato não deve possuir menos de 3 caractéres",
                    maxLength: "O nome do artefato não deve possuir mais de 200 caractéres"
                  }} required />
              </Col>
              <Col sm={12} md={6}>
                <FormGroup id="valor">
                  <ControlLabel>Valor</ControlLabel>
                  <NumberFormat
                    className="form-control"
                    value={this.state.valor}
                    thousandSeparator={"."}
                    decimalPrecision={2}
                    decimalSeparator={","}
                    prefix={"R$ "}
                    onChange={(e, values) => {
                      this.setState({
                        valorFormatado: values.formattedValue,
                        valorFlutuante: values.floatValue,
                        valor: values.value
                      })
                    }} />
                </FormGroup>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={12} md={12}>
                <Button type="submit" disabled={!this.state.canSubmit}
                  className="btn btn-success pull-right">Adicionar</Button>
              </Col>
            </Row>
          </Well>
        </Formsy.Form>
      </div>
    )
  }
}

export default OrcamentoArtefatoForm