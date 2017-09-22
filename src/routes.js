import React from 'react'
import {
  Route
} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import OrcamentosPainel from './orcamentos/painel/container/OrcamentosPainel'
import OrcamentoCadastro from './orcamentos/cadastro/container/OrcamentoCadastro'
import UnidadeCadastro from './unidades/container/UnidadeCadastro'
import ArtefatosCadastro from './artefatos/container/ArtefatosCadastro'
import ResumoOrcamento from './resumo/container/ResumoOrcamento'
import LoginPagina from './login/pagina/LoginPagina'
import { Admin } from './app/admin/Admin'

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
      path='/' component={OrcamentosPainel} />,
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
      path='/resumo/orcamento' component={ResumoOrcamento} />,
    <Route key='login' path='/login' component={LoginPagina} />
  ]
}
