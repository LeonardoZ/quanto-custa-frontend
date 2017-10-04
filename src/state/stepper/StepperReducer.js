import {
  INFORMACAO_ORCAMENTO, CADASTRO_UNIDADES,
  CADASTRO_ARTEFATOS, FINALIZAR
} from './StepperActionTypes'

const STATE = {
  informacaoOrcamento: false,
  cadastroUnidades: false,
  cadastroArtefatos: false,
  finalizar: false
}

export default (state = STATE, action) => {
  switch (action.type) {
    case INFORMACAO_ORCAMENTO:
      return {
        informacaoOrcamento: true,
        cadastroUnidades: false,
        cadastroArtefatos: false,
        finalizar: false
      }
    case CADASTRO_UNIDADES:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: true,
        cadastroArtefatos: false,
        finalizar: false
      }
    case CADASTRO_ARTEFATOS:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: false,
        cadastroArtefatos: true,
        finalizar: false
      }
    case FINALIZAR:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: false,
        cadastroArtefatos: false,
        finalizar: true
      }
    default:
      return state
  }
}