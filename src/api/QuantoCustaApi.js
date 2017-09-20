import axios from 'axios'

let cliente = criarAxios()

let res = (function () {
  let token = sessionStorage.getItem('jwtToken')
  axios.defaults.headers.common['Authorization'] = token ? "Bearer " + token : null;
})();


function criarAxios() {
  return axios.create({
    baseURL: 'http://localhost:8080/quantocusta/api/',
    responseType: 'json'
  });
}

export function getOrcamentos(usuario) {
  let request = cliente.get("/orcamentos/do/usuario/" + usuario.uuid)
  return request
}

export function salvarOrcamento(usuario, orcamento) {
  let request = cliente.post("/orcamento/do/usuario/" + usuario.uuid, orcamento)
  return request
}

export function atualizarOrcamento(orcamentoAtivo, orcamentoData) {
  let data = { ...orcamentoData, validoAte: orcamentoAtivo.validoAte }
  let request = cliente.put("/orcamento/" + orcamentoAtivo.uuid, data)
  return request
}

export function salvarUnidade(orcamentoAtivo, unidade) {
  let request = cliente.post("/unidade/do/orcamento/" + orcamentoAtivo.uuid, unidade)
  return request
}

export function carregarUnidades(orcamento) {
  let request = cliente.get('/unidades/do/orcamento/' + orcamento.uuid)
  let orcamentoPromise = Promise.resolve(orcamento)
  return Promise.all([request, orcamentoPromise])
}

export function atualizarUnidade(unidade, data) {
  let request = cliente.put("/unidade/" + unidade.uuid, data)
  return request
}

export function getArtefatos(unidade) {
  let request = cliente.get('/artefatos/da/unidade/' + unidade.uuid)
  let unidadePromise = Promise.resolve(unidade)
  return Promise.all([request, unidadePromise])
}

export function salvarArtefato(unidadeAtiva, artefato) {
  let request = cliente.post("/artefato/da/unidade/" + unidadeAtiva.uuid, artefato)
  return request
}

export function atualizarArtefato(artefatoAtivo, data) {
  let request = cliente.put("/artefato/" + artefatoAtivo.uuid, data)
  return request
}

export function fazerLogin(loginData) {
  axios.defaults.headers.common['Authorization'] = null
  let request = cliente.post("/auth", loginData)
    .then((resultado) => {
      sessionStorage.setItem("jwtToken", resultado.data.token)
      axios.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('jwtToken')
      let usuarioPromise = getUsuario()
      return Promise.all([resultado, usuarioPromise])
    }).catch(err => {
      return { ...err, error: true }
    })
  return request
}

export function getUsuario() {
  let request = cliente.get("/usuario")
  return request
}
