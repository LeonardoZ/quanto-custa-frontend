import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from 'react-flexbox-grid'

const styles = {
  marginTop: "8px",
}

export const ButtonBar = ({ novaUnidade, editarOrcamento, finalizarOrcamento }) => (
  <Col xs={12} style={styles}>
    <Row around="xs">
      <Col xs={12} md={4}>
        <RaisedButton fullWidth={true} onClick={() => editarOrcamento()} label="Editar Orçamento" />
      </Col>
      <Col xs={12} md={4}>
        <RaisedButton fullWidth={true} secondary={true} onClick={() => novaUnidade()} label="Nova Unidade de Software" />
      </Col>
      <Col xs={12} md={4}>
        <RaisedButton fullWidth={true} primary={true} onClick={() => finalizarOrcamento()} label="Finalizar Orçamento" />
      </Col>
      <hr />
    </Row>
  </Col>
)

export default ButtonBar