import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from 'react-flexbox-grid'

const styles = {
  marginTop: "8px",
}

export const ButtonBar = ({ podeFinalizar, revisar, finalizar }) => (
  <Col xs={12} style={styles}>
    <Row between="xs">
      <Col xs={12} md={4}>
        <RaisedButton fullWidth={true} primary={true} onClick={() => revisar()} label="Revisar" />
      </Col>
      <Col xs={12} md={4}>
        <RaisedButton 
          disabled={!podeFinalizar}
          fullWidth={true} 
          secondary={true} 
          onClick={() => finalizar()} 
          label="Finalizar Orçamento" />
      </Col>
    </Row>
  </Col>
)

export default ButtonBar