import React from 'react'
import UnidadeItem from '../item/UnidadeItem'
import NenhumItem from '../../util/nenhum_item_registrado/NenhumItemRegistrado'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const UnidadesList = ({ unidades, editarCallback, artefatosCallback }) => {
  if (unidades.length === 0) {
    <NenhumItem tipoDoItem="Unidade de Software" />
  }

  let items = unidades.map((uni, idx) => {
    return <UnidadeItem key={idx} unidade={uni} 
      editarCallback={uni => editarCallback(uni)} 
      artefatosCallback={uni => artefatosCallback(uni)} />
  })

  return (
      <Row className="show-grid">
        <Col sm={12} md={12}>
          <Table>
            <TableHeader displaySelectAll={false} >
              <TableRow>
                <TableHeaderColumn>Unidade de software</TableHeaderColumn>
                <TableHeaderColumn>Editar</TableHeaderColumn>
                <TableHeaderColumn>Artefatos</TableHeaderColumn>
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

export default UnidadesList
