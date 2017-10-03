import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import OrcamentoItem from '../item/OrcamentoItem'
import NenhumItem from '../../../../util/nenhum_item_registrado/NenhumItemRegistrado'
import { GridList } from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  gridList: {
    flexDirection: 'column',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  item: {
    marginBottom: '8px',
    marginTop: '8px',
  }
}
const OrcamentosList = ({ orcamentos, editarOrcamento, abrirResumo }) => {
  if (orcamentos.lengTableHeaderColumn === 0) {
    return <NenhumItem tipoDoItem="Orçamento" />
  }
  let items = orcamentos.map((orc, idx) => {
    return (
      <Col xs={12} md={6} key={idx} style={styles.item}>
        <OrcamentoItem 
          orcamento={orc} 
          editarOrcamento={() => editarOrcamento(orc)}  
          abrirResumo={() =>  abrirResumo(orc)}/>
      </Col>
    )
  })

  return (
    <Grid>
      <Row>
        <div style={styles.root}>
          {items}
        </div>
      </Row>
    </Grid>
  )

}

export default OrcamentosList
