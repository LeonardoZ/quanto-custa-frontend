import React from 'react'
import Paper from 'material-ui/Paper'
import { Col } from 'react-flexbox-grid'
const style = {
  margin: 12,
  padding: 12
};

const NenhumItemRegistrado = ({ tipoDoItem, feminino = false }) => {
  let nenhum = feminino ? 'Nenhuma' : 'Nenhum'
  return (
    <Col xs={12}>
      <Paper style={style} zDepth={1} rounded={false} >
        <strong>{nenhum} {tipoDoItem} registrado.</strong>
      </Paper>
    </Col>
  )
}

export default NenhumItemRegistrado 