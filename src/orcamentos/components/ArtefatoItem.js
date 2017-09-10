import React from 'react'
import { Button } from 'react-bootstrap'

const ArtefatoItem = ({ artefato, editarArtefato }) => {
    return (
        // TODO - editar e limpar form
        <tr>
            <td>{artefato.nome}</td>
            <td>{artefato.custo}</td>
            <td><Button className="btn btn-info" 
                        bsSize="small"
                        onClick={() => editarArtefato(artefato)}>
                    Editar
                </Button>
            </td>
        </tr>
    )
}

export default ArtefatoItem