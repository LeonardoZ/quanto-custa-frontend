import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './LoginPagina.css'

const style = {}

const LoginPagina = ({ children }) => {
  return (
    <Grid id={"grid-login"}>
      <Row center={"xs"} middle={"xs"} style={{ minHeight: "100vh" }}>
        <Col xs={12} sm={4} style={style} >
          {children}
        </Col>
      </Row>
    </Grid>
  )
}

export default LoginPagina