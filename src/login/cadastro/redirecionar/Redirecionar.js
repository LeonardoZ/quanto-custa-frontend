import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const style = {
  padding: 12
};

export default class Redirecionar extends Component {
  render() {
    return (
      <Paper zDepth={1} rounded={false} style={style}>
        <p>Usuário criado com sucesso! Confirme seu cadastro no e-mail enviado.</p>
        <RaisedButton label="Ir para login" onClick={() => this.props.redirecionar()} />
      </Paper>
    )
  }
}


