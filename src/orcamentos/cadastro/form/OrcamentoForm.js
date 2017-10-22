import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import { MyInput } from '../../../util/formulario/form_group/FormGroup'

const style = {
  padding: 12
}

class OrcamentoForm extends Component {
  constructor(props) {
    super(props)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillMount() {
    this.setState({
      canSubmit: false,
      login: "",
      senha: ""
    })
  }
  enableButton() {
    this.setState({ canSubmit: true })
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  componentDidMount() {
    let orcamento = this.props.orcamento;
    let orcamentoEmAndamento = orcamento.nome || orcamento.responsavel || orcamento.cliente;
    this.setState({
      canSubmit: false,
      textoEstadoPagina: orcamentoEmAndamento ? "Atualizar" : "Próximo"
    })
  }

  submit(dados) {
    this.props.submitOrcamento(dados)
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}
            className="login">

            <Paper style={style}>
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
                {this.props.btnNext}
                <RaisedButton primary={true} type="submit"
                  label={this.state.textoEstadoPagina || "Aguarde"}
                  disabled={!this.state.canSubmit} />
              </div>
            </Paper>
          </Formsy.Form>
        </Col>
      </Row>
    )
  }

}

export default OrcamentoForm