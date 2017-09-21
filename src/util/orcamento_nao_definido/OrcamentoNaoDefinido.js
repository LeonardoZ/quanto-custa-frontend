import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
  padding: 12
};

const OrcamentoNaoDefinido = ({ voltarAoInicio }) => {
  return (
    <Paper style={style} zDepth={3} rounded={false} >
      <div><strong>Orçamento não Definido!</strong> </div>
      <RaisedButton onClick={voltarAoInicio} label="Voltar para o início" />
    </Paper>
  )
}

export default OrcamentoNaoDefinido