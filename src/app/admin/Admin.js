import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AppBar from 'material-ui/AppBar'
import ErroPanel from '../../util/erro/ErroPanel'

const style = {
  content: {
    paddingTop: "24px"
  }
};

const root = {
  width: '100%'
}

export const Admin = ({ routes, erro, limparErros, children }) => {
  let erroPanel = erro.temErro ?
    <Row>
      <Col xs={12} >
        <ErroPanel limparErros={() => limparErros()} erroMsg={erro.mensagem} />
      </Col>
    </Row>
    : ""
  return (
    <div style={root}>
      <AppBar
        title="Quanto-Custa?"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
      {erroPanel}
      <Grid>
        <Row around="xs" style={style.content}>
          {children}
        </Row>
      </Grid>
    </div>
  )
}

export default Admin