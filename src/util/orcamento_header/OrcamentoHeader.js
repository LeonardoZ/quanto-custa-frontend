import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
  margin: 12,
  padding: 12
};

const OrcamentoHeader = ({ orcamento }) => {
  if (orcamento)
    return (
      <div>
        <Paper style={style} zDepth={3} rounded={false}>
          <h1>Orçamento</h1>
          <div>
            <strong>Nome: </strong>
            <span>{orcamento.nome}</span>
          </div>
          <div>
            <strong>Cliente: </strong>
            <span>{orcamento.cliente}</span>
          </div>
          <div>
            <strong>Responsável: </strong>
            <span>{orcamento.responsavel}</span>
          </div>
        </Paper>
      </div>
    )
  else
    return (<div>aguarde</div>)
}

export default OrcamentoHeader