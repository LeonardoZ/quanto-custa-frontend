import {
  INFORMACAO_ORCAMENTO,
  CADASTRO_UNIDADES,
  CADASTRO_ARTEFATOS, 
  FINALIZAR_UNIDADES,
  DEFINIR_PAGAMENTO
} from './StepperActionTypes'

const STATE = {
  informacaoOrcamento: false,
  cadastroUnidades: false,
  cadastroArtefatos: false,
  finalizarUnidades: false,
  definirPagamento: false
}

export default (state = STATE, action) => {
  switch (action.type) {
    case INFORMACAO_ORCAMENTO:
      return {
        informacaoOrcamento: true,
        cadastroUnidades: false,
        cadastroArtefatos: false,
        finalizarUnidades: false,
        definirPagamento: false
      }
    case CADASTRO_UNIDADES:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: true,
        cadastroArtefatos: false,
        finalizarUnidades: false,
        definirPagamento: false
      }
    case CADASTRO_ARTEFATOS:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: false,
        cadastroArtefatos: true,
        finalizarUnidades: false,
        definirPagamento: false
      }
    case FINALIZAR_UNIDADES:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: false,
        cadastroArtefatos: false,
        finalizarUnidades: true,
        definirPagamento: false
      }
    case DEFINIR_PAGAMENTO:
      return {
        informacaoOrcamento: false,
        cadastroUnidades: false,
        cadastroArtefatos: false,
        finalizarUnidades: false,
        definirPagamento: true
      }
    default:
      return state
  }
}