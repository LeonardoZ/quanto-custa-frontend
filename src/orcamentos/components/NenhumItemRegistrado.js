import React from 'react'
import { Button, Alert, HelpBlock } from 'react-bootstrap'

const NenhumItemRegistrado = ({tipoDoItem}) => {
    return (
        <Alert bsStyle="info">
            <HelpBlock><strong>Nenhum {tipoDoItem} registrado.</strong></HelpBlock>
        </Alert>
    )
}

export default NenhumItemRegistrado 