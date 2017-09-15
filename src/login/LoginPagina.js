import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import AppBar from 'material-ui/AppBar'
import Login from './Login'

const style = {}

const LoginPagina = () => {
  return (
  <div>
    <AppBar
      title="Quanto-Custa?" />
    <Grid fluid>
      <Row>
        <Col sm={12} xs={6} xsOffset={3} style={style}>
          <Login />
        </Col>
      </Row>
    </Grid>
  </div>)
}

export default LoginPagina