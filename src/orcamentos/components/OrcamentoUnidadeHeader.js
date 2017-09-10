import React from 'react'
import { Well } from 'react-bootstrap'

const OrcamentoUnidadeHeader = ({ orcamento, unidadeAtiva }) => {
  let block = null;
  if (unidadeAtiva) {
    block =
      <div>
        <strong>
          Unidade:
        </strong>
        <span>{unidadeAtiva.titulo}</span>
      </div>
  }
  if (orcamento)
    return (
      <div>
        <h1>Unidades de software do Orçamento</h1>
        <Well>
          <strong>
            Orçamento:
          </strong>
          <span>{orcamento.nome} - {orcamento.cliente}</span>
          {block}
        </Well>
      </div>
    )
    else 
      return (<p>Carregando orçamento...</p>)
}

export default OrcamentoUnidadeHeader