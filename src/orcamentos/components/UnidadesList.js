import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import UnidadeItem from './UnidadeItem'

const UnidadesList = ({ unidades, editarCallback }) => {
  
  let items = unidades.map((uni, idx) => {
    return <UnidadeItem key={idx} unidade={uni} editarCallback={uni => editarCallback(uni)} />
  })

  return (
      <Row className="show-grid">
        <Col sm={12} md={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>Unidade de software</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </Table>
        </Col>
      </Row>
  )
}

export default UnidadesList
