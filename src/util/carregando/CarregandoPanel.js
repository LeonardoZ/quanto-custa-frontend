import React from 'react'
import Dialog from 'material-ui/Dialog'
import CircularProgress from 'material-ui/CircularProgress'
import { Row, Col } from 'react-flexbox-grid'

export const CarregandoPanel = ({ carregando = false }) => {
  return (
    <Row center="xs">
      <Col xs={6}>
        <Dialog
          title="Carregando"
          modal={false}
          open={carregando}>
          <CircularProgress size={50} thickness={6} />
          <p>Carregando, aguarde...</p>
        </Dialog>
      </Col>
    </Row>
  )
}

export default CarregandoPanel