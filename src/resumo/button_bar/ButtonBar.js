import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export const ButtonBar = ({ novaUnidade, editarOrcamento, finalizarOrcamento }) => (
  <div>
    <RaisedButton primary={true} onClick={() => novaUnidade()} label="Nova Unidade de Software" />
    <RaisedButton secondary={true} onClick={() => editarOrcamento()} label="Editar Orçamento" />
    <RaisedButton onClick={() => finalizarOrcamento()} label="Finalizar Orçamento" />
    <hr />
  </div>
)

export default ButtonBar