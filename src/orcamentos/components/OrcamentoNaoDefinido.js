import React from 'react'
import { Button, Alert, HelpBlock } from 'react-bootstrap'

const OrcamentoNaoDefinido = ({voltarAoInicio}) => {
    return (
        <Alert bsStyle="danger">
            <HelpBlock><strong>Orçamento não Definido!</strong></HelpBlock>
            <Button onClick={voltarAoInicio}>Voltar para o início</Button>
        </Alert>
    )
}

export default OrcamentoNaoDefinido