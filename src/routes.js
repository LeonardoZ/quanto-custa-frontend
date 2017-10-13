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
import Principal from './login/principal/Principal'
import ValidarCadastro from './login/validar_cadastro/container/ValidarCadastro'
import AtivarCadastro from './login/ativar/container/AtivarCadastro'
import EsqueciSenha from './login/esqueceu_senha/container/EsqueciSenha'
import AlterarSenha from './login/alterar_senha/container/AlterarSenha'
import Pagamento from './pagamento/container/Pagamento'
import Visualizar from './visualizar/container/Visualizar'
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
    <PrivateRoute key='pagamentos' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/pagamento' component={Pagamento} />,
    <PrivateRoute key='visualizar' exact isUserAuthenticated={isAuthenticated}
      erro={erro} limparErros={limparErros}
      path='/ver/orcamento' component={Visualizar} />,
    <Route key='login' path='/login' component={Principal} />,
    <Route key='ativar' path='/ativar/cadastro' component={AtivarCadastro} />,
    <Route key='validar' path='/validar/token/:token/email/:email' component={ValidarCadastro} />,
    <Route key='esqueci' path='/esqueci/senha' component={EsqueciSenha} />,
    <Route key='alterar_senha' path='/alterar/senha/token/:token/email/:email' component={AlterarSenha} />
  ]
}
