import React from 'react'
import { Col } from 'react-flexbox-grid'

export const PagamentoPagina = (props) => {
  return (
    <Col xs={12}>
      {props.children}
    </Col>
  )
}

export default PagamentoPagina