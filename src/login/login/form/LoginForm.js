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

class LoginForm extends Component {
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

  submit(data) {
    this.props.onLoginSubmit(data)
  }

  render() {
    let block = ""
    let erro = this.props.erro

    if (erro && erro.temErro) {
      block = <p>{this.props.erro.mensagem}</p>
    }
    return (
      <Paper zDepth={1} rounded={false} style={style}>
        {block}
        <Formsy.Form
          onSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <Row className="show-grid">
            <Col xs>
              <MyInput name="login" title="Login"
                value={this.state.login}
                validations="maxLength:150,minLength:3"
                validationErrors={{
                  minLength: "O login não deve possuir menos de 3 caractéres",
                  maxLength: "O login não deve possuir mais de 120 caractéres"
                }} required />

              <MyInput name="senha" title="Senha"
                value={this.state.senha}
                type="password"
                validations="minLength:6"
                validationErrors={{
                  minLength: "A senha não deve possuir menos de 6 digitos",
                }} required />

            </Col>
          </Row>
          <Row end={"xs"}>
            <Col xs={12} md={6}>
              <FlatButton style={btnEsqueceuStyle} label="Esqueceu a senha?" />
            </Col>
            <Col xs={12} md={6}>
              <RaisedButton style={btnSubmitStyle} type="submit" disabled={!this.state.canSubmit}
                label="Entrar" />
            </Col>
          </Row>
        </Formsy.Form>
      </Paper>)

  }

}

export default LoginForm;