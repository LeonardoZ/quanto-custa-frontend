import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import ArtefatoItem from './ArtefatoItem'

const ArtefatoItems = ({ artefatos, editarArtefato }) => {
  
  let items = artefatos.map((art, i) => {
    return <ArtefatoItem key={i} artefato={art} editarArtefato={() => editarArtefato(art)} />
  })

  return (
      <Row className="show-grid">
        <Col sm={12} md={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>Artefato</th>
                <th>Preço</th>
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

export default ArtefatoItems
