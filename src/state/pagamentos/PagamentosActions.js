import {
  SALVAR_PAGAMENTO,
  ATUALIZAR_PAGAMENTO,
  CARREGA_PAGAMENTO,
  REMOVER_PAGAMENTO,
  CONFIGURA_PAGAMENTO_ATIVO,
  NOVO_PAGAMENTO,
  CALCULAR_PAGAMENTO,
  INVALIDAR_PAGAMENTO
} from './PagamentosActionTypes'
import * as api from '../../api/QuantoCustaApi'

export function salvarPagamento(pagamento, orcamento) {
  let request = api.salvarPagamento(pagamento, orcamento)
  return {
    "type": SALVAR_PAGAMENTO,
    "payload": request
  }
}

export function atualizarPagamento(pagamento, orcamento) {
  let request = api.atualizarPagamento(pagamento, orcamento)
  return {
    "type": ATUALIZAR_PAGAMENTO,
    "payload": request
  }
}

export function configuraPagamentoAtivo(pagamento) {
  return {
    "type": CONFIGURA_PAGAMENTO_ATIVO,
    "payload": pagamento
  }
}

export function carregaPagamento(orcamento) {
  let request = api.carregaPagamento(orcamento)
  return {
    "type": CARREGA_PAGAMENTO,
    "payload": request
  }
}

export function removerPagamento(pagamento) {
  let request = api.removerPagamento(pagamento)
  return {
    "type": REMOVER_PAGAMENTO,
    "payload": request
  }
}

export function calcularPagamento(pagamento, orcamento) {
  let request = api.calcularPagamento(pagamento, orcamento)
  return {
    "type": CALCULAR_PAGAMENTO,
    "payload": request
  }
}

export function novoPagamento() {
  return {
    "type": NOVO_PAGAMENTO,
  }
}

export function invalidarPagamento() {
  return {
    "type": INVALIDAR_PAGAMENTO,
  }
}


