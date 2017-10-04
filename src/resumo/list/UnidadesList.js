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
  TableFooter
} from 'material-ui/Table'
import { formatarMoeda } from '../../util/number_format/NumberFormat'
import Paper from 'material-ui/Paper'

const styles = {
  textAlign: 'center'
}

const UnidadesList = ({ unidades, editarCallback, artefatosCallback, remover }) => {
  if (unidades.length === 0) {
    return <NenhumItem tipoDoItem="Unidade de Software" feminino={true} />
  }

  let items = unidades.map((uni, idx) => {
    return <UnidadeItem key={idx} unidade={uni}
      editarCallback={uni => editarCallback(uni)}
      artefatosCallback={uni => artefatosCallback(uni)}
      removerCallback={() => remover(uni)} />
  })

  let valorTotal = unidades.map(x => x.subTotal).reduce((acc = 0, x) => acc + x)
  valorTotal = formatarMoeda(valorTotal)

  return (
    <Col xs={12} className="show-grid">
      <Paper zDepth={1}>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={styles}>Unidade de software</TableHeaderColumn>
              <TableHeaderColumn style={styles}>SubTotal</TableHeaderColumn>
              <TableHeaderColumn style={styles}>Artefatos</TableHeaderColumn>
              <TableHeaderColumn style={styles}>Editar</TableHeaderColumn>
              <TableHeaderColumn style={styles}>Remover</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {items}
          </TableBody>
          <TableFooter adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={styles}>
                <strong>Total:</strong>
              </TableHeaderColumn>
              <TableHeaderColumn style={styles}>
                <strong>{valorTotal}</strong>
              </TableHeaderColumn>
              <TableHeaderColumn>
              </TableHeaderColumn>
              <TableHeaderColumn>
              </TableHeaderColumn>
              <TableHeaderColumn>
              </TableHeaderColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </Col>
  )
}

export default UnidadesList
