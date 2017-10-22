
import { 
  GET_ORCAMENTOS, 
  SALVAR_ORCAMENTO, 
  EDITAR_ORCAMENTO, 
  NOVO_ORCAMENTO, 
  CARREGANDO_ORCAMENTO,
  REMOVER_ORCAMENTO } 
from './OrcamentosActionTypes'

import * as api from '../../api/QuantoCustaApi'

export function setCarregandoOrcamento(params) {
  return {
    type: CARREGANDO_ORCAMENTO
  }
}

export function getOrcamentos(usuario) {      
  return { type: GET_ORCAMENTOS, payload: api.getOrcamentos(usuario) }
}

export function salvarOrcamento(usuario, orcamento) {
  let request = api.salvarOrcamento(usuario, orcamento)
  return {
    "type": SALVAR_ORCAMENTO,
    "payload": request
  }
}

export function atualizarOrcamento(orcamentoAtivo, orcamentoData) {
  let request = api.atualizarOrcamento(orcamentoAtivo, orcamentoData)
  return {
    "type": SALVAR_ORCAMENTO,
    "payload": request
  }
}

export function editarOrcamento(orcamento) {
  return {
    "type": EDITAR_ORCAMENTO,
    "payload": orcamento
  }
}

export function novoOrcamento() {
  return {
    "type": NOVO_ORCAMENTO,
  }
}

export function removerOrcamento(orcamento) {
  let request = api.removerOrcamento(orcamento)
  return {
    "type": REMOVER_ORCAMENTO,
    "payload": request
  }
}