import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Table, {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const ArtefatoItem = ({ artefato, editarArtefato }) => {
  return (
    // TODO - editar e limpar form
    <TableRow>
      <TableRowColumn>{artefato.nome}</TableRowColumn>
      <TableRowColumn>{artefato.custo}</TableRowColumn>
      <TableRowColumn>
        <RaisedButton
          onClick={() => editarArtefato(artefato)}
          label="Editar" />
      </TableRowColumn>
    </TableRow>
  )
}

export default ArtefatoItem