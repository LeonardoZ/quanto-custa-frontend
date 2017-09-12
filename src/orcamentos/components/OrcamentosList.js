import React from 'react'
import OrcamentoItem from './OrcamentoItem'
import NenhumItem from './NenhumItemRegistrado'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const OrcamentosList = ({ orcamentos, editarOrcamento }) => {
  if (orcamentos.lengTableHeaderColumn === 0) {
    return <NenhumItem tipoDoItem="Orçamento" />
  }
  let items = orcamentos.map((orc, idx) => {
    return <OrcamentoItem key={idx} orcamento={orc} editarOrcamento={() => editarOrcamento(orc)} />
  })

  return (
    <Row>
      <Col sm={12} md={12}>
        <Table >
          <TableHeader displaySelectAll={false} >
            <TableRow>
              <TableHeaderColumn>Projeto </TableHeaderColumn>
              <TableHeaderColumn>Cliente </TableHeaderColumn>
              <TableHeaderColumn>Responsável </TableHeaderColumn>
              <TableHeaderColumn>Criado em </TableHeaderColumn>
              <TableHeaderColumn>Válido até </TableHeaderColumn>
              <TableHeaderColumn>Dias restantes</TableHeaderColumn>
              <TableHeaderColumn>Ações</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {items}
          </TableBody>
        </Table>
      </Col>
    </Row>
  )
}

export default OrcamentosList
