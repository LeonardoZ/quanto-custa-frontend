import React from 'react'
import Paper from 'material-ui/Paper'
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import FontIcon from 'material-ui/FontIcon'
import Avatar from 'material-ui/Avatar'
import SvgIconFace from 'material-ui/svg-icons/action/face'
import {
  cyan700,
  cyan500,
  amber100,
  amber700,
  cyan100
} from 'material-ui/styles/colors'
const style = {
  margin: "8px",
  padding: "8px"
}

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
  }
}


const UnidadeHeader = ({ orcamento, unidadeAtiva }) => {

  let primeiraLetra = orcamento.nome.substring(0, 1)
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
      <Card>
        <CardHeader titleStyle={styles.textStyle} avatar={
          <Avatar backgroundColor={cyan500}>
            {primeiraLetra}
          </Avatar>}
          title={orcamento.nome}
          actAsExpander={false}
          showExpandableButton={false} />

        <CardText expandable={false}>
          <div style={styles.wrapper}>
            <h2>Unidade de Software</h2>
            <CardText expandable={false}>
              <div style={styles.wrapper}>
                <Chip style={styles.chip} backgroundColor={cyan100}>
                  <Avatar size={32} backgroundColor={cyan700}>V</Avatar>
                  <strong>Cliente: </strong>{orcamento.cliente}
                </Chip>
                <Chip style={styles.chip} backgroundColor={amber100}>
                  <Avatar backgroundColor={amber700} size={32} icon={<SvgIconFace />} />
                  <strong>Responsável:</strong> {orcamento.responsavel}
                </Chip>
              </div>
            </CardText>
          </div>
        </CardText>
      </Card>
    )
  else
    return (<p>Carregando orçamento...</p>)
}

export default UnidadeHeader