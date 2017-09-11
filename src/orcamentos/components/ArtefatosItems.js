import React from 'react'
import { Col, Row, Table, Alert } from 'react-bootstrap'
import ArtefatoItem from './ArtefatoItem'
import NenhumItem from './NenhumItemRegistrado'

const ArtefatoItems = ({ artefatos, editarArtefato }) => {
  if (artefatos.length === 0) {
    return <NenhumItem tipoDoItem="Artefato" />
  }

  let items = artefatos.map((art, i) => {
    return <ArtefatoItem key={i} artefato={art} editarArtefato={() => editarArtefato(art)} />
  })

  return (
    <Row className="show-grid">
      <Col sm={12} md={12}>
        <Table responsive hover>
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
