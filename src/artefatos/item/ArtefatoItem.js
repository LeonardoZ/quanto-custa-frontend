import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Table, {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { formatarMoeda } from '../../util/number_format/NumberFormat'

const styles = {
  textAlign: 'center'
}

const ArtefatoItem = ({ artefato, editarArtefato, removerArtefato }) => {
  return (
    // TODO - editar e limpar form
    <TableRow>
      <TableRowColumn style={styles}>{artefato.nome}</TableRowColumn>
      <TableRowColumn style={styles}>{formatarMoeda(artefato.custo)}</TableRowColumn>
      <TableRowColumn style={styles}>
        <RaisedButton
          onClick={() => editarArtefato(artefato)}
          label="Editar" />
      </TableRowColumn>
      <TableRowColumn style={styles}>
        <RaisedButton
          onClick={() => removerArtefato(artefato)}
          label="Remover" />
      </TableRowColumn>
    </TableRow>
  )
}

export default ArtefatoItem