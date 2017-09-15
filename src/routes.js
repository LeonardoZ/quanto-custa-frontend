import React from 'react'
import {
  Route
} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import OrcamentosPanel from './orcamentos/containers/OrcamentosPanel'
import OrcamentoCadastro from './orcamentos/containers/OrcamentoCadastro'
import UnidadeCadastro from './orcamentos/containers/UnidadeCadastro'
import ArtefatosCadastro from './orcamentos/containers/ArtefatosCadastro'
import OrcamentoParcialAtivo from './orcamentos/containers/OrcamentoParcialAtivo'
import LoginPagina from './login/LoginPagina'
import { Admin } from './app/Admin'

const PrivateRoute =
  ({ component: Component, erro, limparErros, isUserAuthenticated, ...rest }) => (
    <Route {...rest} render={props => (
      isUserAuthenticated ? (
        <Admin erro={erro} limparErros={() => limparErros()} >
          <Component {...props} />
        </Admin>
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
    )} />
  )

export const getRoutes = (erro, limparErros, isAuthenticated) => {
  return [
    <PrivateRoute key='orcamentos' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/' component={OrcamentosPanel} />,
    <PrivateRoute key='orcamento-cadastro' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/orcamento' component={OrcamentoCadastro} />,
    <PrivateRoute key='orcamento-cadastro-unidade' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/unidade' component={UnidadeCadastro} />,
    <PrivateRoute key='unidade-cadastro-artefatos' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/artefatos' component={ArtefatosCadastro} />,
    <PrivateRoute key='orcamento-unidades' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/orcamento/ativo' component={OrcamentoParcialAtivo} />,
    <Route key='login' path='/login' component={LoginPagina} />
  ]
}
