import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Login from '../login/container/Login'
import CadastroUsuario from '../cadastro/container/CadastroUsuario'

export const LoginTabs = (props) => {
  return (
    <Tabs>
      <Tab label="Entrar">
        <Login />
      </Tab>
      <Tab label="Cadastro">
        <CadastroUsuario />
      </Tab>
    </Tabs>
  )
}

export default LoginTabs