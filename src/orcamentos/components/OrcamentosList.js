import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import OrcamentoItem from './OrcamentoItem'

const OrcamentosList = ({ orcamentos, editarOrcamento }) => {
  
  let items = orcamentos.map((orc, idx) => {
    return <OrcamentoItem key={idx} orcamento={orc} editarOrcamento={() => editarOrcamento(orc)} />
  })

  return (
      <Row className="show-grid">
        <Col sm={12} md={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>Projeto </th>
                <th>Cliente </th>
                <th>Responsável </th>
                <th>Criado em </th>
                <th>Válido até </th>
                <th>Dias restantes</th>
                <th>Ações</th>
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

export default OrcamentosList
