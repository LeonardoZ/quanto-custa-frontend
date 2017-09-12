import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  margin: 12,
  padding: 12
};

const NenhumItemRegistrado = ({ tipoDoItem }) => {
  return (
    <Paper style={style} zDepth={3} rounded={false} >
      <strong>Nenhum {tipoDoItem} registrado.</strong>
    </Paper>
  )
}

export default NenhumItemRegistrado 