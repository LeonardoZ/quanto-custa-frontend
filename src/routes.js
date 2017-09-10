import React from 'react'
import {
  Route
} from 'react-router-dom'
import OrcamentosPanel from './orcamentos/containers/OrcamentosPanel'
import OrcamentoCadastro from './orcamentos/containers/OrcamentoCadastro'
import UnidadeCadastro from './orcamentos/containers/UnidadeCadastro'
import ArtefatosCadastro from './orcamentos/containers/ArtefatosCadastro'
import OrcamentoParcialAtivo from './orcamentos/containers/OrcamentoParcialAtivo'

/** PrivateRoute = ({ component: Component, isUserAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    isUserAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }} />
    )
  )} />
)
*/
export const getRoutes = (isAuthenticated) => {
  return [
    <Route key='orcamentos' exact path='/' component={OrcamentosPanel} />,
    <Route key='orcamento-cadastro' exact path='/orcamento' component={OrcamentoCadastro} />,
    <Route key='orcamento-cadastro-unidade' exact path='/unidade' component={UnidadeCadastro} />,
    <Route key='unidade-cadastro-artefatos' exact path='/artefatos' component={ArtefatosCadastro} />,
    <Route key='orcamento-unidades' exact path='/orcamento/ativo' component={OrcamentoParcialAtivo} />
    //<PrivateRoute key='b' path='/b' isUserAuthenticated={isAuthenticated} component={B} />,
    //<Route key='login' path='/login' component={LoginForm} />,
  ]
}