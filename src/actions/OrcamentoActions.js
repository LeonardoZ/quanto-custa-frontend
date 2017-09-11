import axios from 'axios'

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
  NOVO_ARTEFATO
} from './ActionTypes'

const client = axios.create({
  baseURL: 'http://localhost:8080/quantocusta/api/',
  responseType: 'json'
});

export function getOrcamentos() {
  let request = client.get('/orcamentos')
  return {
    "type": GET_ORCAMENTOS,
    "payload": request
  }
}

export function salvarOrcamento(orcamento) {
  let request = client.post('/orcamento', orcamento);

  return {
    "type": SALVAR_ORCAMENTO,
    "payload": request
  }
}

export function atualizarOrcamento(orcamentoAtivo, orcamentoData) {
  let data = { ...orcamentoData, validoAte: orcamentoAtivo.validoAte }
  let request = client.put(`/orcamento/${orcamentoAtivo.uuid}`, data);

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
  let request = client.post("/unidade/do/orcamento/" + orcamentoAtivo.uuid, unidade)
  return {
    "type": SALVAR_UNIDADE,
    "payload": request
  }
}

export function carregarUnidades(orcamento) {
  let request = client.get('/unidades/do/orcamento/' + orcamento.uuid)
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
  let request = client.put("/unidade/" + unidade.uuid, data);
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
  let request = client.get('/artefatos/da/unidade/' + unidade.uuid)
  return {
    "type": GET_ARTEFATOS,
    "payload": request
  }
}

export function salvarArtefato(unidadeAtiva, artefato) {
  let request = client.post("/artefato/da/unidade/" + unidadeAtiva.uuid, artefato)
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
  let request = client.put("/artefato/" + artefatoAtivo.uuid, data)
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
    "payload": novoArtefato,
  }
}


export function finalizarUnidade() {
  return {
    "type": FINALIZAR_UNIDADE,
  }
}

