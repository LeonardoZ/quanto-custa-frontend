import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export const CadastrarArtefatosPagina = (props) => {
  return (
    <Row>
      <Col sm={12} md={12}>
        {props.children}
      </Col>
    </Row>
  )
}

export default CadastrarArtefatosPagina