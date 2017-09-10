import React from 'react'
import {
  Route
} from 'react-router-dom'
import OrcamentosPanel from './orcamentos/containers/OrcamentosPanel'
import OrcamentoCadastro from './orcamentos/containers/OrcamentoCadastro'
import OrcamentoUnidadesWizard from './orcamentos/containers/OrcamentoUnidadesWizard'
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
    <Route key='orcamento-unidades-wizard' exact path='/unidade' component={OrcamentoUnidadesWizard} />,
    <Route key='orcamento-unidades' exact path='/orcamento/ativo' component={OrcamentoParcialAtivo} />
    //<PrivateRoute key='b' path='/b' isUserAuthenticated={isAuthenticated} component={B} />,
    //<Route key='login' path='/login' component={LoginForm} />,
  ]
}