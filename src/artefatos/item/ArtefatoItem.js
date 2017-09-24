import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Table, {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { formatarMoeda } from '../../util/number_format/NumberFormat'

const ArtefatoItem = ({ artefato, editarArtefato }) => {
  return (
    // TODO - editar e limpar form
    <TableRow>
      <TableRowColumn>{artefato.nome}</TableRowColumn>
      <TableRowColumn>{formatarMoeda(artefato.custo)}</TableRowColumn>
      <TableRowColumn>
        <RaisedButton
          onClick={() => editarArtefato(artefato)}
          label="Editar" />
      </TableRowColumn>
    </TableRow>
  )
}

export default ArtefatoItem