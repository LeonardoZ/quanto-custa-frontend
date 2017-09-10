import React from 'react'
import { Well } from 'react-bootstrap'

const OrcamentoHeader = ({ orcamentoParcial }) => {
  if (orcamentoParcial)
    return (
      <div>
        <Well>
          <div>
            <strong>Nome: </strong>
            <span>{orcamentoParcial.nome}</span>
          </div>
          <div>
            <strong>Cliente: </strong>
            <span>{orcamentoParcial.cliente}</span>
          </div>
          <div>
            <strong>Responsável: </strong>
            <span>{orcamentoParcial.responsavel}</span>
          </div>
        </Well>
      </div>
    )
  else 
    return (<div>aguarde</div>)
}

export default OrcamentoHeader