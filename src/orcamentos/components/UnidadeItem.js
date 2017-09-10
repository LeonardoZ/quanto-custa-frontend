import React from 'react'
import { Button } from 'react-bootstrap'

const UnidadeItem = ({ unidade, editarCallback, artefatosCallback }) => {
    return (
        <tr>
            <td>{unidade.titulo}</td>
            <td>
            <Button bsStyle="primary" bsSize="small" 
                onClick={()=> editarCallback(unidade)}>Editar</Button>
            </td>
            <td>
            <Button bsStyle="primary" bsSize="small" 
                onClick={()=> artefatosCallback(unidade)}>Artefatos</Button>
            </td>
        </tr>
    )
}

export default UnidadeItem