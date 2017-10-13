import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from 'react-flexbox-grid'

const styles = {
  marginTop: "8px",
  marginBottom: "8px",
}

export const ButtonBar = ({ novo, remover, removerAtivo }) => (
  <Col xs={12} style={styles}>
    <Row between="xs">
      <Col xs={12} md={4}>
        <RaisedButton fullWidth={true} primary={true} onClick={() => novo()} label="Novo Pagamento" />
      </Col>
      <Col xs={12} md={4}>
        <RaisedButton disabled={!removerAtivo} fullWidth={true} secondary={true} onClick={() => remover()} label="Remover Pagamento" />
      </Col>
    </Row>
  </Col>
)

export default ButtonBar