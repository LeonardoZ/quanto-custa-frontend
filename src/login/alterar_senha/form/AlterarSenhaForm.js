import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { MyInput } from '../../../util/formulario/form_group/FormGroup'
import { Row, Col } from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  padding: 24
};


class AterarSenhaForm extends Component {

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
    this.props.alterarSenhaSubmit(dados)
  }

  render() {
    let mensagem = ""
    let erro = this.props.erro
    let alterando = this.props.alterando
    let conteudo = ""
    if (erro && erro.temErro) {
      mensagem = erro.mensagem
      conteudo = (<div>
        <p><strong>{mensagem}</strong></p>
        <RaisedButton onClick={() => this.props.irParaLogin()}
          label="Voltar" />
      </div>
      )
    } else if (alterando) {
      conteudo = (<div>
        <p><strong>Senha alterada!</strong></p>
        <RaisedButton onClick={() => this.props.irParaLogin()}
          label="Voltar" />
      </div>
      )
    } else {
      conteudo = (<Formsy.Form
        onSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}>

        <Row className="show-grid">
          <Col xs>
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
              label="Alterar Senha" />
          </Col>
        </Row>
      </Formsy.Form>)
    }

    return (
      <Paper zDepth={1} rounded={false} style={style}>
        <p>Usuario: {this.props.email}</p>
        <h2>Alterar senha</h2>
        {conteudo}
      </Paper>)

  }

}

export default AterarSenhaForm