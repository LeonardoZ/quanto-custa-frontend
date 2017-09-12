import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  margin: 12,
  padding: 12
}

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
      <Paper style={style}  zDepth={3} rounded={false}>
        <h1>Unidades de software do Orçamento</h1>
        <strong>
          Orçamento:
          </strong>
        <span>{orcamento.nome} - {orcamento.cliente}</span>
        {block}
      </Paper>
    )
  else
    return (<p>Carregando orçamento...</p>)
}

export default OrcamentoUnidadeHeader