import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Login from '../login/container/Login'
import CadastroUsuario from '../cadastro/container/CadastroUsuario'

export const LoginTabs = (props) => {
  let tabs = {login: 0, cadastro: 1}
  return (
    <Tabs value={props.loginSelecionado ? 0 : 1}>
      <Tab label="Entrar" value={tabs.login}>
        <Login />
      </Tab>
      <Tab label="Cadastro" value={tabs.cadastro}>
        <CadastroUsuario />
      </Tab>
    </Tabs>
  )
}

export default LoginTabs