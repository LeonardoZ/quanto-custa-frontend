import React from 'react'
import { Col } from 'react-flexbox-grid'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableFooter
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import ArtefatoItem from '../item/ArtefatoItem'
import NenhumItem from '../../util/nenhum_item_registrado/NenhumItemRegistrado'
import { formatarMoeda } from '../../util/number_format/NumberFormat'

const blockStyles = {
  marginBottom: "32px"
}

const styles = {
  textAlign: 'center'
}


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
    <Col xs={12} style={blockStyles}>
      <Paper zDepth={1}>

        <Table responsive hover>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={styles}>Artefato</TableHeaderColumn>
              <TableHeaderColumn style={styles}>Custo</TableHeaderColumn>
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
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    </Col>
  )
}

export default ArtefatosList
