import { combineReducers } from 'redux'
import Orcamentos from './OrcamentosReducer'
import Unidades from './UnidadesReducer'
import Artefatos from './ArtefatosReducer'
import Erros from './ErrosReducer'

const rootReducer = combineReducers({
    errosStateTree: Erros,
    orcamentoStateTree: Orcamentos,
    unidadesStateTree: Unidades,
    artefatosStateTree: Artefatos
})

export default rootReducer