import React from 'react'
import Paper from 'material-ui/Paper'
import { Col } from 'react-flexbox-grid'
import { Card, CardActions, CardTitle, CardText, CardHeader } from 'material-ui/Card'
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

const OrcamentoHeader = ({ orcamento, unidade, subtitulo }) => {
  let primeiraLetra = orcamento.nome.substring(0, 1)
  let titulo = ""
  if (unidade) {
    titulo = <CardTitle title={unidade.titulo} subtitle="Unidade de Software" />
  }

  if (orcamento)
    return (
      <Col xs={12}>
        <Card>
          <CardHeader titleStyle={styles.textStyle} avatar={
            <Avatar backgroundColor={cyan500}>
              {primeiraLetra}
            </Avatar>}
            title={orcamento.nome}
            subtitle={subtitulo}
            actAsExpander={false}
            showExpandableButton={false} />
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
              {this}
            </div>
          </CardText>
          {titulo}
        </Card>
      </Col>
    )
  else
    return (<div>aguarde</div>)
}

export default OrcamentoHeader