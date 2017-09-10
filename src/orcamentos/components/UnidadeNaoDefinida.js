import React from 'react'
import { Button, Alert, HelpBlock } from 'react-bootstrap'

const UnidadeNaoDefinida = ({voltarAoInicio}) => {
    return (
        <Alert bsStyle="danger">
            <HelpBlock><strong>Unidade não definida!</strong></HelpBlock>
            <Button onClick={voltarAoInicio}>Voltar para o início</Button>
        </Alert>
    )
}

export default UnidadeNaoDefinida