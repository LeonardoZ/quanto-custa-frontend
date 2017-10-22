import React from 'react'
import LoginPagina from '../pagina/LoginPagina'
import LoginTabs from '../login_tabs/LoginTabs'

export const Principal = (props) => {
  let loginSelecionado = props.location.search.loginSelecionado || true
  return (
    <LoginPagina>
      <LoginTabs loginSelecionado={loginSelecionado}/>
    </LoginPagina>
  )
}

export default Principal