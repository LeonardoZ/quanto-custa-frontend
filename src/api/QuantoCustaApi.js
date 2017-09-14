import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8080/quantocusta/api/',
  responseType: 'json'
});

export function getOrcamentos() {
  let request = client.get('/orcamentos')
  return request
}

export function salvarOrcamento(orcamento) {
  let request = client.post('/orcamento', orcamento)
  return request
}

export function atualizarOrcamento(orcamentoAtivo, orcamentoData) {
  let data = { ...orcamentoData, validoAte: orcamentoAtivo.validoAte }
  let request = client.put(`/orcamento/${orcamentoAtivo.uuid}`, data)
  return request
}


export function salvarUnidade(orcamentoAtivo, unidade) {
  let request = client.post("/unidade/do/orcamento/" + orcamentoAtivo.uuid, unidade)
  return request
}


export function carregarUnidades(orcamento) {
  let request = client.get('/unidades/do/orcamento/' + orcamento.uuid)
  let orcamentoPromise = Promise.resolve(orcamento)
  return Promise.all([request, orcamentoPromise])
}


export function atualizarUnidade(unidade, data) {
  let request = client.put("/unidade/" + unidade.uuid, data)
  return request
}


export function getArtefatos(unidade) {
  let request = client.get('/artefatos/da/unidade/' + unidade.uuid)
  let unidadePromise = Promise.resolve(unidade)
  return Promise.all([request, unidadePromise])
}


export function salvarArtefato(unidadeAtiva, artefato) {
  let request = client.post("/artefato/da/unidade/" + unidadeAtiva.uuid, artefato)
  return request
}

export function atualizarArtefato(artefatoAtivo, data) {
  let request = client.put("/artefato/" + artefatoAtivo.uuid, data)
  return request
}