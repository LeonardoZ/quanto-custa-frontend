import React from 'react'

import { Row, Col } from 'react-flexbox-grid'

export const UnidadeCadastroPagina = ({ children }) => {
  return (
    <Row>
      <Col xs={12}>
        {children}
      </Col>
    </Row>
  )
}

export default UnidadeCadastroPagina