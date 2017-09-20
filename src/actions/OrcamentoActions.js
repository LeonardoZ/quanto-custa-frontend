import {
  GET_ORCAMENTOS,
  SALVAR_ORCAMENTO,
  EDITAR_ORCAMENTO,
  SALVAR_ARTEFATO,
  SET_UNIDADE_ATIVA,
  SALVAR_UNIDADE,
  FINALIZAR_UNIDADE,
  NOVO_ORCAMENTO,
  NOVA_UNIDADE_DE_SOFTWARE,
  ATUALIZAR_UNIDADE,
  EDITAR_UNIDADE,
  GET_ARTEFATOS,
  CARREGAR_UNIDADES,
  EDITAR_ARTEFATO,
  ATUALIZAR_ARTEFATO,
  NOVO_ARTEFATO,
  LIMPAR_ERROS,
  FAZER_LOGIN,
  CADASTRAR_USUARIO,
  GET_USUARIO
} from './ActionTypes'

import * as api from '../api/QuantoCustaApi'

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

export function novoOrcamento() {
  return {
    "type": NOVO_ORCAMENTO,
  }
}

export function getArtefatos(unidade) {
  let request = api.getArtefatos(unidade)
  return {
    "type": GET_ARTEFATOS,
    "payload": request
  }
}

export function salvarArtefato(unidadeAtiva, artefato) {
  let request = api.salvarArtefato(unidadeAtiva, artefato)
  return {
    "type": SALVAR_ARTEFATO,
    "payload": request
  }
}

export function editarArtefato(artefato) {
  return {
    "type": EDITAR_ARTEFATO,
    "payload": artefato
  }
}

export function atualizarArtefato(artefatoAtivo, data) {
  let request = api.atualizarArtefato(artefatoAtivo, data)
  return {
    "type": ATUALIZAR_ARTEFATO,
    "payload": request
  }
}


export function configurarUnidadeParaAtiva(unidade) {
  return {
    "type": SET_UNIDADE_ATIVA,
    "payload": unidade
  }
}

export function novoArtefato() {
  return {
    "type": NOVO_ARTEFATO,
  }
}

export function finalizarUnidade() {
  return {
    "type": FINALIZAR_UNIDADE,
  }
}

export function limparErros() {
  return {
    "type": LIMPAR_ERROS,
  }
}

export function fazerLogin(dadosLogin) {
  let request = api.fazerLogin(dadosLogin)
  return {
    "type": FAZER_LOGIN,
    "payload": request
  }
}

export function cadastrarUsuario(unidade, data) {
  return {
    "type": CADASTRAR_USUARIO
  }
}

export function getUsuario() {
  let token = sessionStorage.getItem("jwtToken")
  let request = api.getUsuario()
  return {
    "type": GET_USUARIO,
    "payload": request
  }
}