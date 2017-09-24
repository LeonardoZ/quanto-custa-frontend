import React from 'react'
import Table, {
  TableRowColumn,
  TableRow,
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import { formatarMoeda } from '../../util/number_format/NumberFormat'

const UnidadeItem = ({ unidade, editarCallback, artefatosCallback }) => {
  return (
    <TableRow>
      <TableRowColumn>{unidade.titulo}</TableRowColumn>
      <TableRowColumn>{formatarMoeda(unidade.subTotal)}</TableRowColumn>
      <TableRowColumn>
        <RaisedButton onClick={() => editarCallback(unidade)} label="Editar" />
      </TableRowColumn>
      <TableRowColumn>
        <RaisedButton onClick={() => artefatosCallback(unidade)} label="Artefatos" />
      </TableRowColumn>
    </TableRow>
  )
}

export default UnidadeItem