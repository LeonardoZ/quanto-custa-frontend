import {
  EDITAR_UNIDADE, SALVAR_UNIDADE,
  NOVA_UNIDADE_DE_SOFTWARE, ATUALIZAR_UNIDADE,
  FINALIZAR_UNIDADE, CARREGAR_UNIDADES, SET_UNIDADE_ATIVA
} from './UnidadesActionTypes'

import * as api from '../../api/QuantoCustaApi'

export function novaUnidadeDeSoftware() {
  return {
    "type": NOVA_UNIDADE_DE_SOFTWARE,
    "payload": {}
  }
}

export function salvarUnidade(orcamentoAtivo, unidade) {
  let request = api.salvarUnidade(orcamentoAtivo, unidade)
  return {
    "type": SALVAR_UNIDADE,
    "payload": request
  }
}

export function carregarUnidades(orcamento) {
  let request = api.carregarUnidades(orcamento)
  return {
    "type": CARREGAR_UNIDADES,
    "payload": request
  }
}

export function editarUnidade(unidade) {
  return {
    "type": EDITAR_UNIDADE,
    "payload": unidade
  }
}

export function atualizarUnidade(unidade, data) {
  let request = api.atualizarUnidade(unidade, data)
  return {
    "type": ATUALIZAR_UNIDADE,
    "payload": request
  }
}

export function configurarUnidadeParaAtiva(unidade) {
  return {
    "type": SET_UNIDADE_ATIVA,
    "payload": unidade
  }
}

export function finalizarUnidade() {
  return {
    "type": FINALIZAR_UNIDADE,
  }
}

