import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import { formatarMoeda, formatarPorcentagem } from '../number_format/NumberFormat'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import {
  pink200,
  pink700,
  purple200,
  purple700,
  deepPurple200,
  deepPurple700,
  indigo200,
  indigo700,
  teal200,
  teal700
} from 'material-ui/styles/colors'

// TODO
export const PainelPagamento = ({ pagamento }) => {
  const styles = {
    padding: "8px",
    marginTop: "8px"
  }

  const chips = {
    margin: "4px"
  }

  let items = pagamento.calculoPagamento.map((item, idx) => {
    return (
      <Chip key={idx} style={chips} backgroundColor={teal200}>
        <Avatar backgroundColor={teal700}>{idx + 1}</Avatar>
        <strong>
          {item.representacao}
        </strong>
      </Chip>)
  })

  let subtitulo = pagamento.ehParcelado ? "Parcelas" : "Pagamento único"
  let chipsDePagamento = pagamento.ehParcelado ?
    (<div>
      <Chip backgroundColor={pink200} style={chips}>
        <Avatar backgroundColor={pink700}>Pv</Avatar><strong>{"Parcelas: " + pagamento.pagamentoEmVezes}</strong>
      </Chip>
      <Chip backgroundColor={purple200} style={chips}>
        <Avatar backgroundColor={purple700}>Jm</Avatar><strong>{"Juros mensais: " + formatarPorcentagem(pagamento.jurosMensaisPercentuais)}</strong>
      </Chip>
      <Chip backgroundColor={deepPurple200} style={chips}>
        <Avatar backgroundColor={deepPurple700}>En</Avatar><strong>{"Entrada: " + formatarMoeda(pagamento.entrada)}</strong>
      </Chip>
    </div>) :
    (<div>
      <Chip backgroundColor={indigo200} style={chips}>
        <Avatar backgroundColor={indigo700}>Vz</Avatar><strong>{"Desconto à vista: " + formatarPorcentagem(pagamento.descontoAVistaParcial)}</strong>
      </Chip>
    </div>)
  return (
    <Col xs={12}>
      <Paper zDepth={1} style={styles}>
        <Subheader>Condições de pagamento</Subheader>
        {chipsDePagamento}
        <Divider />
        <Subheader>{subtitulo}</Subheader>
        {items}
      </Paper>
    </Col>
  )
}

export default PainelPagamento