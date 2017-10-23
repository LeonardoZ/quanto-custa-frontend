import {
  INFORMACAO_ORCAMENTO, 
  CADASTRO_UNIDADES, 
  CADASTRO_ARTEFATOS, 
  FINALIZAR_UNIDADES,
  DEFINIR_PAGAMENTO
} from './StepperActionTypes'

export function informacaoOrcamento() {
  return {"type": INFORMACAO_ORCAMENTO}
}

export function cadastroUnidades() {
  return {"type": CADASTRO_UNIDADES}
}

export function cadastroArtefatos() {
  return {"type": CADASTRO_ARTEFATOS}
}

export function finalizarUnidades() {
  return {"type": FINALIZAR_UNIDADES}
}

export function definirPagamento() {
  return {"type": DEFINIR_PAGAMENTO}
}