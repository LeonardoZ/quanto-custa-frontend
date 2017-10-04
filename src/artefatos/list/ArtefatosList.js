import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
} from 'material-ui/Table';
import ArtefatoItem from '../item/ArtefatoItem'
import NenhumItem from '../../util/nenhum_item_registrado/NenhumItemRegistrado'
import { formatarMoeda } from '../../util/number_format/NumberFormat'

const ArtefatosList = ({ artefatos, editarArtefato, remover }) => {
  if (artefatos.length === 0) {
    return <NenhumItem tipoDoItem="Artefato" />
  }

  let items = artefatos.map((art, i) => {
    return <ArtefatoItem 
            key={i} 
            artefato={art} 
            editarArtefato={() => editarArtefato(art)}
            removerArtefato={() => remover(art)} />
  })

  let valorTotal = artefatos.map(x => x.custo).reduce((acc = 0, x) => acc + x)
  valorTotal = formatarMoeda(valorTotal)

  return (
    <Col xs={12}>
      <Table responsive hover>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Artefato</TableHeaderColumn>
            <TableHeaderColumn>Custo</TableHeaderColumn>
            <TableHeaderColumn>Editar</TableHeaderColumn>
            <TableHeaderColumn>Remover</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {items}
        </TableBody>
        <TableFooter adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>
              Total:
              </TableHeaderColumn>
            <TableHeaderColumn>
              {valorTotal}
            </TableHeaderColumn>
          </TableRow>
        </TableFooter>
      </Table>
    </Col>
  )
}

export default ArtefatosList
