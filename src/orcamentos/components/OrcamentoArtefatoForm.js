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
  }

  componentWillReceiveProps({ artefatoAtivo }) {
    this.setState({
      nome: artefatoAtivo.nome,
      custo: artefatoAtivo.custo,
      ehArtefatoVelho: artefatoAtivo.uuid
    });
  }

  componentWillMount() {
    this.setState({
      canFinish: this.props.artefatos.length > 0,
    })
  }

  submit(data) {
    let newData = {
      ...data,
      custo: this.state.custo
    }
    this.props.salvarArtefato(newData)
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  novoArtefato() {
    this.props.novoArtefato()
  }

  render() {
    return (
      <div>
        <Button bsClass="defualt" onClick={() => this.props.novoArtefato()}> Novo</Button>
        <Formsy.Form
          onSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <h3>Artefatos </h3>
          <Well>
            <Row className="show-grid">
              <Col sm={12} md={6}>
                <MyInput name="nome" title="Artefato"
                  value={this.state.nome}
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
                    value={this.state.custo}
                    thousandSeparator={"."}
                    decimalPrecision={2}
                    decimalSeparator={","}
                    prefix={"R$ "}
                    onChange={(e, values) => {
                      this.setState({
                        valorFormatado: values.formattedValue,
                        custo: values.floatValue,
                        valor: values.value
                      })
                    }} />
                </FormGroup>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={12} md={12}>
                <Button type="submit" disabled={!this.state.canSubmit}
                  className="btn btn-success pull-right">{!this.state.ehArtefatoVelho ? "Adicionar" : "Atualizar"}</Button>
              </Col>
            </Row>
          </Well>
        </Formsy.Form>
      </div>
    )
  }
}

export default OrcamentoArtefatoForm