import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AppBar from 'material-ui/AppBar'
import ErroPanel from '../erro/ErroPanel'

const style = {
  margin: 24,
};

export const Admin = ({ routes, erro, limparErros, children }) => {
  let erroPanel = erro.temErro ?
    <Row>
      <Col sm={12} xs={12}>
        <ErroPanel limparErros={() => limparErros()} erroMsg={erro.mensagem} />
      </Col>
    </Row>
    : ""
  return (
    <div>
      <AppBar
        title="Quanto-Custa?"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
      {erroPanel}
      <Grid fluid>
        <Row>
          <Col sm={12} xs={12} style={style}>
            {children}
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Admin