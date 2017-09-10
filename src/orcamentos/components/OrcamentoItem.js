import React from 'react'
import { parseToFormat, daysBetween } from '../ApiDateParser'
import { Button } from 'react-bootstrap'
const OrcamentoItem = ({ orcamento, editarOrcamento }) => {
    return (
        <tr>
            <td>{orcamento.nome}</td>
            <td>{orcamento.cliente}</td>
            <td>{orcamento.responsavel}</td>
            <td>{parseToFormat(orcamento.criadoEm)}</td>
            <td>{parseToFormat(orcamento.validoAte)}</td>
            <td>{daysBetween(orcamento.validoAte, orcamento.criadoEm)}</td>
            <td><Button className="btn btn-info" bsSize="small"
                onClick={() => editarOrcamento(orcamento)}>Editar
                </Button>
             </td>
        </tr>
    )
}

export default OrcamentoItem