import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import { MyInput } from '../../util/formulario/form_group/FormGroup'

const style = {
  padding: "8px"
};

class OrcamentoUnidadeForm extends Component {

  constructor(props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.submit = this.submit.bind(this)
    this.enableButton = this.enableButton.bind(this)
  }

  componentWillMount() {
    this.setState({ canSubmit: false })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  submit(data) {
    this.props.salvarUnidade(data)
  }

  render() {
    return (
      <Paper zDepth={1} rounded={false} style={style}>
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <MyInput name="titulo" title="Título" validations="maxLength:200,minLength:3"
            validationErrors={{
              minLength: "O titulo não deve possuir menos de 3 caractéres",
              maxLength: "O título não de possuir mais de 200 caractéres"
            }} required value={this.props.unidadeAtiva.titulo}
            placeholder="Ex.: Aplicativo Móvel, Site, ERP, Módulo" />

          <Row>
            <Col sm={12} md={12}>
              <RaisedButton type="submit" primary={true} disabled={!this.state.canSubmit} label="Salvar" />
            </Col>
          </Row>
        </Formsy.Form>
      </Paper>
    )
  }
}

export default OrcamentoUnidadeForm