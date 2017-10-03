import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { MyInput } from '../../../util/formulario/form_group/FormGroup'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'

const style = {
  padding: 12
};

const btnSubmitStyle = {
  alignSelf: 'flex-end'
}


const btnEsqueceuStyle = {
  alignSelf: 'flex-start'
}

class AtivarCadastroForm extends Component {
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

  submit(dados) {
    this.props.reenviarEmail(dados)
  }

  render() {
    let erroBlock = ""
    let infoBlock = ""
    let erro = this.props.erro
    let enviado = this.props.enviado

    if (erro && erro.temErro) {
      erroBlock = <p>{this.props.erro.mensagem}</p>
    }

    if (enviado) {
      infoBlock = (
        <div>
          <p>Mensagem enviada ao e-mail informado.</p>
          <br />
          <RaisedButton onClick={() => this.props.voltarAoLogin()} label="Voltar para login." />
        </div>)
    } else {
       infoBlock = (<p>Digite seu e-mail para que a mensagem de ativação seja reenviada.</p>)
    }
    return (
      <Paper zDepth={1} rounded={false} style={style}>
        {erroBlock}
        {infoBlock}
         <Formsy.Form
          onSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <Row className="show-grid">
            <Col xs>
              <MyInput name="email" title="E-mail de cadastro"
                value={this.state.login}
                validations="isEmail"
                validationErrors={{
                  isEmail: "Digite um e-mail válido."
                }} required autocomplete="off" />

            </Col>
          </Row>
          <Row end={"xs"}>
            <Col xs={12} md={6}>
              <RaisedButton style={btnSubmitStyle} type="submit" disabled={!this.state.canSubmit}
                label="Reenviar email" />
            </Col>
          </Row>
        </Formsy.Form>
      </Paper>)

  }

}

export default AtivarCadastroForm;