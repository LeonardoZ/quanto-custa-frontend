import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
  padding: 12
};

const FinalizarUnidadeArtefatos = ({ onFinish, canFinish }) => {
  return (
    <Row style={style} end="xs">
      <Col sm={12} md={12}>
        <RaisedButton type="submit" primary={true} onClick={() => onFinish()} disabled={!canFinish}
          label="Terminar Unidade de Software" />
      </Col>
    </Row>
  )
}

export default FinalizarUnidadeArtefatos