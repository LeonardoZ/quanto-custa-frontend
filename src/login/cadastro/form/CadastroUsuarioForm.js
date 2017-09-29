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

class CadastroUsuarioForm extends Component {
  
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
    this.props.cadastrarUsuarioSubmit(dados)
  }

  render() {
    return (
      <Paper zDepth={1} rounded={false} style={style}>
        <Formsy.Form
          onSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>

          <Row className="show-grid">
            <Col xs>
              <MyInput name="email" title="E-mail"
                value={this.state.email}
                validations="isEmail"
                validationErrors={{
                  isEmail: "O email deve ser um endereço válido"
                }} required />

              <MyInput name="login" title="Login"
                value={this.state.login}
                validations="maxLength:150,minLength:3"
                validationErrors={{
                  minLength: "O login não deve possuir menos de 3 caractéres",
                  maxLength: "O login não deve possuir mais de 200 caractéres"
                }} required />

              <MyInput name="senha" title="Senha"
                value={this.state.senha}
                type="password"
                validations="minLength:6"
                validationErrors={{
                  minLength: "A senha não deve possuir menos de 6 digitos",
                }} required />

              <MyInput name="repitaSenha" title="Repita a senha"
                value={this.state.repitaSenha}
                type="password"
                validations="minLength:6,equalsField:senha"
                validationErrors={{
                  minLength: "A senha não deve possuir menos de 6 digitos",
                  equalsField: "As senhas devem ser iguais!"
                }} required />

            </Col>
          </Row>
          <Row end={"xs"}>
            <Col xs={12} md={6}>
              <RaisedButton type="submit" disabled={!this.state.canSubmit}
                label="Cadastrar" />
            </Col>
          </Row>
        </Formsy.Form>
      </Paper>)

  }

}

export default CadastroUsuarioForm