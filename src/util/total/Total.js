import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import { formatarMoeda } from '../number_format/NumberFormat'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'
import { calcularTotalDeUnidades } from '../../modelo/unidade_de_software'
import {
  red200,
  red600,
  lime200,
  lime700,
} from 'material-ui/styles/colors'

export const Total = ({ unidades }) => {
  const styles = {
    marginTop: "8px",
    padding: "8px"

  }
  let total = formatarMoeda(calcularTotalDeUnidades(unidades))
  let list = unidades.map((item, idx) => {
    let iniciais = item.titulo.substring(0, 2)
    let texto = item.titulo + " - " + formatarMoeda(item.subTotal)
    return <ListItem
      key={idx}
      primaryText={texto}
      style={styles}
      leftAvatar={<Avatar backgroundColor={lime700}>{iniciais}</Avatar>} />
  })

  return (
    <Col xs={12} style={styles}>
      <Paper zDepth={1}>
        <List>
          <Subheader>Unidades de software</Subheader>
          {list}
        </List>
      </Paper>
      <Paper zDepth={1} style={styles}>
        <Chip backgroundColor={red200}><Avatar backgroundColor={red600}>T</Avatar><strong>Total: {total}</strong></Chip>
      </Paper>
    </Col>
  )
}

export default Total