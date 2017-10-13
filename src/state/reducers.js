import { combineReducers } from 'redux'
import Orcamentos from './orcamentos/OrcamentosReducer'
import Unidades from './unidades_de_software/UnidadesReducer'
import Artefatos from './artefatos/ArtefatosReducer'
import Erros from './erros/ErrosReducer'
import Auth from './autenticacao/AuthReducer'
import Stepper from './stepper/StepperReducer'
import Pagamentos from './pagamentos/PagamentosReducers'

const rootReducer = combineReducers({
    errosStateTree: Erros,
    orcamentoStateTree: Orcamentos,
    unidadesStateTree: Unidades,
    artefatosStateTree: Artefatos,
    authStateTree: Auth,
    stepperStateTree: Stepper,
    pagamentosStateTree: Pagamentos
})

export default rootReducer