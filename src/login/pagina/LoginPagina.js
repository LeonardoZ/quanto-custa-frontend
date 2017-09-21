import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Tabs, Tab } from 'material-ui/Tabs'
import './LoginPagina.css'
import Login from '../login/container/Login'
import CadastroUsuarioForm from '../cadastro/form/CadastroUsuarioForm'

const style = {}

const LoginPagina = () => {
  return (
    <div>
      <Grid id={"grid-login"}>
        <Row center={"xs"} middle={"xs"} style={{ minHeight: "100vh" }}>
          <Col xs={12} sm={4} style={style} >
            <Tabs>
              <Tab label="Entrar">
                <Login />
              </Tab>
              <Tab label="Cadastro">
                <CadastroUsuarioForm />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    </div>)
}

export default LoginPagina