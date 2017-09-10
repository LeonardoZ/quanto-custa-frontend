import React from 'react'
import { Button } from 'react-bootstrap'

const UnidadeItem = ({ unidade, editarCallback }) => {
    return (
        <tr>
            <td>{unidade.titulo}</td>
            <td>
            <Button bsStyle="primary" bsSize="small" 
                onClick={()=> editarCallback(unidade)}> Editar</Button>
            </td>
        </tr>
    )
}

export default UnidadeItem