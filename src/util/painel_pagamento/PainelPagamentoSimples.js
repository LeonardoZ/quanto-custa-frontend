import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import { formatarMoeda } from '../number_format/NumberFormat'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import {
  teal200,
  teal700
} from 'material-ui/styles/colors'

export const PainelPagamentoSimples = ({ calculoPagamento = [], pagamentoInvalido = false, pagamentoInvalidoMensagem = "" }) => {

  const styles = {
    padding: "8px",
    marginTop: "8px"
  }
  const chips = {
    margin: "4px"
  }
  let items = calculoPagamento.map((item, idx) => {
    return (
      <Chip key={idx} style={chips} backgroundColor={teal200}>
        <Avatar backgroundColor={teal700}>{idx + 1}</Avatar>
        <strong>
          {item.representacao}
        </strong>
      </Chip>
    )
  })

  let subtitulo = pagamentoInvalido ?
    "Validação do Pagamento: " + pagamentoInvalidoMensagem
    :
    (calculoPagamento.length > 1 ? "Parcelas" : "Pagamento único")

  return (
    <Col xs={12}>
      <Paper zDepth={1} style={styles}>
        <Subheader>{subtitulo}</Subheader>
        {items}
      </Paper>
    </Col>
  )
}

export default PainelPagamentoSimples