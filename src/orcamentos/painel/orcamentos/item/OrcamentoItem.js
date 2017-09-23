import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Table, {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { parseToFormat, daysBetween } from '../../../../util/date_util/ApiDateParser'

const OrcamentoItem = ({ key, orcamento, editarOrcamento }) => {
  return (
    <TableRow >
      <TableRowColumn>{orcamento.nome}</TableRowColumn>
      <TableRowColumn>{orcamento.cliente}</TableRowColumn>
      <TableRowColumn>{orcamento.responsavel}</TableRowColumn>
      <TableRowColumn>{parseToFormat(orcamento.criadoEm)}</TableRowColumn>
      <TableRowColumn>{parseToFormat(orcamento.validoAte)}</TableRowColumn>
      <TableRowColumn>{daysBetween(orcamento.validoAte, orcamento.criadoEm)}</TableRowColumn>
      <TableRowColumn>
        <RaisedButton
          label="Editar"
          onClick={() => editarOrcamento(orcamento)} />
      </TableRowColumn>
    </TableRow>
  )
}

export default OrcamentoItem