import { combineReducers } from 'redux'
import Orcamentos from './orcamentos/OrcamentosReducer'
import Unidades from './unidades_de_software/UnidadesReducer'
import Artefatos from './artefatos/ArtefatosReducer'
import Erros from './erros/ErrosReducer'
import Auth from './autenticacao/AuthReducer'

const rootReducer = combineReducers({
    errosStateTree: Erros,
    orcamentoStateTree: Orcamentos,
    unidadesStateTree: Unidades,
    artefatosStateTree: Artefatos,
    authStateTree: Auth
})

export default rootReducer