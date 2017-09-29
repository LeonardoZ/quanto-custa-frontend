import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  padding: 24
};

const Mensagem = ({ validando, irParaLogin, erro, jaValidado }) => {
  let mensagem = ""
  if (erro && erro.temErro) {
    mensagem = erro.mensagem
  } else if (jaValidado) {
    mensagem = "Usuário já validado"
  } else if (validando) {
    mensagem = "E-mail validado!"
  } else {
    mensagem = "Validando seu email..."
  }
  return (
    <Paper zDepth={1} rounded={false} style={style}>
      <p><strong>{mensagem}</strong></p>
      <br />
      <RaisedButton
        onClick={() => irParaLogin()}
        label="Ir para o Login" />
      <hr />
    </Paper>
  )
}

export default Mensagem