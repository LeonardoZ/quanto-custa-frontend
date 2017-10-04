import React from 'react'
import Table, {
  TableRowColumn,
  TableRow,
} from 'material-ui/Table'
import FlatButtom from 'material-ui/FlatButton'
import { formatarMoeda } from '../../util/number_format/NumberFormat'

const styles = {
  textAlign: 'center'
}

const UnidadeItem = ({ unidade, editarCallback, artefatosCallback, removerCallback }) => {
  return (
    <TableRow selectable={true}>
      <TableRowColumn style={styles}>{unidade.titulo}</TableRowColumn>
      <TableRowColumn style={styles}>{formatarMoeda(unidade.subTotal)}</TableRowColumn>
      <TableRowColumn style={styles}>
        <FlatButtom onClick={() => editarCallback(unidade)} primary={true} label="Editar" />
      </TableRowColumn>
      <TableRowColumn style={styles}>
        <FlatButtom onClick={() => artefatosCallback(unidade)} secondary={true} label="Artefatos" />
      </TableRowColumn>
      <TableRowColumn style={styles}>
        <FlatButtom onClick={() => removerCallback(unidade)} secondary={true} label="Remover" />
      </TableRowColumn>
    </TableRow>
  )
}

export default UnidadeItem