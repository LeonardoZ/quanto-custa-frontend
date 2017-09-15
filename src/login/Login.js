import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Formsy from 'formsy-react'
import { MyInput } from '../formulario/FormGroup'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'

const style = {
  margin: 12,
  padding: 12
};

class Login extends Component {

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

  }

  disableButton() {

  }

  submit() {

  }

  render() {
    return (
      <Paper zDepth={3} rounded={false} style={style}>
        <Formsy.Form
          onSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}>
          <h3>Login</h3>
          <Row className="show-grid">
            <Col xs>
              <MyInput name="login" title="Login"
                value={this.state.login}
                validations="maxLength:150,minLength:3"
                validationErrors={{
                  minLength: "O login não deve possuir menos de 3 caractéres",
                  maxLength: "O login não deve possuir mais de 200 caractéres"
                }} required />

            </Col>
            <Col xs>
              <MyInput name="senha" title="Senha"
                value={this.state.senha}
                validations="minLength:6"
                validationErrors={{
                  minLength: "A senha não deve possuir menos de 3 caractéres",
                }} required />

            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <RaisedButton type="submit" disabled={!this.state.canSubmit}
                label="Entrar" />
            </Col>
          </Row>
        </Formsy.Form>
      </Paper>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}


function mapStateToProps({ orcamentoStateTree, unidadesStateTree, artefatosStateTree }) {
  return {
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
