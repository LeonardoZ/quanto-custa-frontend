import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { MyInput } from '../../util/formulario/form_group/FormGroup'
import NumberFormat from 'react-number-format'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'

const style = {
  marginBottom: "0px 8px 8px 8px",
  padding: "8px"
}

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
      custo: this.state.custo || 0.0
    }
    this.props.salvarArtefato(newData)
    this.novoArtefato()
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  novoArtefato() {
    this.resetForm()
    this.props.novoArtefato()
  }

  resetForm() {
    this.artefatoForm.reset();
  }

  render() {
    return (
      <Col xs={12}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Artefato" />
            <ToolbarSeparator />
            <RaisedButton secondary={true} onClick={() => this.novoArtefato()} label="Novo" />
          </ToolbarGroup>
        </Toolbar>
        <Paper zDepth={1} rounded={false} style={style}>
          <Formsy.Form
            ref={(event) => { this.artefatoForm = event; }}
            onSubmit={this.submit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}>
            <h3>Artefatos</h3>
            <Row className="show-grid">
              <Col xs>
                <MyInput name="nome" title="Artefato"
                  value={this.state.nome}
                  validations="maxLength:150,minLength:3"
                  validationErrors={{
                    minLength: "O nome do artefato não deve possuir menos de 3 caracteres",
                    maxLength: "O nome do artefato não deve possuir mais de 200 caracteres"
                  }} required />

              </Col>
              <Col xs>
                <NumberFormat
                  name="custo"
                  fullWidth={true}
                  hintText="R$ 0,00"
                  customInput={TextField}
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
              </Col>
            </Row>
            <Row around="xs">
              <Col xs={12} md={6}>
                <RaisedButton type="submit" disabled={!this.state.canSubmit}
                  label={!this.state.ehArtefatoVelho ? "Adicionar" : "Atualizar"} />
              </Col>

              <Col xs={12} md={6}>
                <RaisedButton type="reset" onClick={() => this.resetForm()}
                  label={"Limpar"} />
              </Col>
            </Row>
          </Formsy.Form>
        </Paper>
      </Col>
    )
  }
}

export default OrcamentoArtefatoForm