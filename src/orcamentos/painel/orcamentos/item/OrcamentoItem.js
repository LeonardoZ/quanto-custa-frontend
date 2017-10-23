import React from 'react'
import Paper from 'material-ui/Paper'
import { Card, CardActions, CardText, CardHeader } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import {
  cyan500,
} from 'material-ui/styles/colors'
import Chips from '../../../../util/orcamento_chips/OrcamentoChips'

const styles = {
  root: {
    width: "100%",
    minWidth: "390px"
  },
  textStyle: {
    color: 'rgb(0, 188, 212)',
    fontSize: 20
  },
  chip: {
    margin: 4,
  }
}

const textStyles = {
  fontStyle: 'bold',
  color: 'rgb(0, 188, 212)',
  fontSize: 20
}

const OrcamentoItem = ({ key, orcamento, editarOrcamento, abrirResumo, remover, ver }) => {
  let primeiraLetra = orcamento.nome.substring(0, 1)

  const cliente = "Cliente: " + orcamento.cliente
  return (
    <Paper style={styles.root}>
      <Card>
        <CardHeader titleStyle={textStyles} avatar={
          <Avatar backgroundColor={cyan500}>
            {primeiraLetra}
          </Avatar>}
          title={orcamento.nome}
          subtitle={cliente}
          actAsExpander={true}
          showExpandableButton={true} />

        <CardActions>
          <FlatButton
            label="Editar Orçamento"
            primary={true}
            onClick={() => editarOrcamento(orcamento)} />
          <FlatButton
            label="Resumo"
            primary={true}
            onClick={() => abrirResumo(orcamento)} />
          <FlatButton
            label="Remover"
            primary={true}
            onClick={() => remover(orcamento)} />    
          <FlatButton
            label="Ver"
            primary={true}
            onClick={() => ver(orcamento)} />
        </CardActions>

        <CardText expandable={true}>
          <Chips orcamento={orcamento} />
        </CardText>
      </Card>
    </Paper>
  )

}

export default OrcamentoItem