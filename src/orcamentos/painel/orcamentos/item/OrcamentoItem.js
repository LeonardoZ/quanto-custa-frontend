import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Table, {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { parseToFormat, daysBetween } from '../../../../util/date_util/ApiDateParser'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Chip from 'material-ui/Chip'
import FontIcon from 'material-ui/FontIcon'
import Avatar from 'material-ui/Avatar'
import SvgIconFace from 'material-ui/svg-icons/action/face'

import {
  green100,
  green700,
  deepOrange100,
  deepOrange700,
  cyan700,
  cyan500,
  amber100,
  amber700,
  cyan100
} from 'material-ui/styles/colors'

const styles = {
  root: {
    flexGrow: 1
  },
  textStyle: {
    color: 'rgb(0, 188, 212)',
    fontSize: 20
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
}

const textStyles = {
  fontStyle: 'bold',
  color: 'rgb(0, 188, 212)',
  fontSize: 20
}

const OrcamentoItem = ({ key, orcamento, editarOrcamento, abrirResumo }) => {
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
        </CardActions>

        <CardText expandable={true}>
          <div style={styles.wrapper}>
            <Chip style={styles.chip} backgroundColor={amber100}>
              <Avatar backgroundColor={amber700} size={32} icon={<SvgIconFace />} />
              <strong>Responsável:</strong> {orcamento.responsavel}
            </Chip>
            <Chip style={styles.chip} backgroundColor={cyan100}>
              <Avatar size={32} backgroundColor={cyan700}>C</Avatar>
              <strong>Criado em:</strong> {parseToFormat(orcamento.criadoEm)}
            </Chip>
            <Chip style={styles.chip} backgroundColor={cyan100}>
              <Avatar size={32} backgroundColor={cyan700}>V</Avatar>
              <strong>Válido até:</strong> {parseToFormat(orcamento.validoAte)}
            </Chip>
            <Chip style={styles.chip} backgroundColor={green100}>
              <Avatar size={32} backgroundColor={green700}>U</Avatar>
              <strong>Unidades de software:</strong> 10
              </Chip>
            <Chip style={styles.chip} backgroundColor={green100}>
              <Avatar size={32} backgroundColor={green700}>A</Avatar>
              <strong>Artefatos</strong> 62
              </Chip>
            <Chip style={styles.chip} backgroundColor={deepOrange100}>
              <Avatar size={32} backgroundColor={deepOrange700}>T</Avatar>
              <strong>Valor total: </strong> R$ 42,500.50
              </Chip>
          </div>
        </CardText>
      </Card>
    </Paper>
  )

}

export default OrcamentoItem