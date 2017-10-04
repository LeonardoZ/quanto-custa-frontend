import {
  INFORMACAO_ORCAMENTO, CADASTRO_UNIDADES,
  CADASTRO_ARTEFATOS, FINALIZAR
} from './StepperActionTypes'

export function informacaoOrcamento() {
  return {
    "type": INFORMACAO_ORCAMENTO
  }
}

export function cadastroUnidades() {
  return {
    "type": CADASTRO_UNIDADES
  }
}

export function cadastroArtefatos() {
  return {
    "type": CADASTRO_ARTEFATOS
  }
}

export function finalizar() {
  return {
    "type": FINALIZAR
  }
}