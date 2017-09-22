import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export const BotaoNovo = ({novoOrcamento}) => {
  return (
    <RaisedButton label="Novo Orçamento" primary={true}
      onClick={() => novoOrcamento()} />
  )
}

export default BotaoNovo