import React from 'react'
import { Button, Row, Col,  } from 'react-bootstrap'

const FinalizarUnidade = ({ onFinish, canFinish }) => {
  return (
    <Row className="show-grid">
      <Col sm={12} md={12}>
        <Button type="submit" onClick={() => onFinish()} disabled={!canFinish}
          className="btn btn-primary pull-right">Terminar Unidade de Software</Button>
      </Col>
    </Row>
  )
}

export default FinalizarUnidade