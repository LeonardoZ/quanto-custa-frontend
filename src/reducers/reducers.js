import { combineReducers } from 'redux'
import Orcamentos from './OrcamentosReducer'

const rootReducer = combineReducers({
    orcamentoStateTree: Orcamentos
})

export default rootReducer