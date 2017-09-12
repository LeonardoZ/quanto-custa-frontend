import React from 'react'
import ArtefatoItem from './ArtefatoItem'
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

const ArtefatoItems = ({ artefatos, editarArtefato }) => {
  if (artefatos.length === 0) {
    return <NenhumItem tipoDoItem="Artefato" />
  }

  let items = artefatos.map((art, i) => {
    return <ArtefatoItem key={i} artefato={art} editarArtefato={() => editarArtefato(art)} />
  })

  return (
    <Row>
      <Col sm={12} md={12}>
        <Table responsive hover>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Artefato</TableHeaderColumn>
              <TableHeaderColumn>Preço</TableHeaderColumn>
              <TableHeaderColumn>Editar</TableHeaderColumn>
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

export default ArtefatoItems
