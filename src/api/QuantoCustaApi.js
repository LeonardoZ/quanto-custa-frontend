import axios from 'axios'

let cliente = criarAxios()

let res = (function () {
  let token = sessionStorage.getItem('jwtToken')
    ? "Bearer " + token
    : null;
})();

console.log(res)

function criarAxios() {
  return axios.create({
    baseURL: 'http://localhost:8080/quantocusta/api/',
    responseType: 'json',
    validateStatus: function (status) {
      return status >= 200 && status < 500; // default
    }
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
  let data = {
    ...orcamentoData,
    validoAte: orcamentoAtivo.validoAte
  }
  let request = cliente.put("/orcamento/" + orcamentoAtivo.uuid, data)
  return request
}

export function removerOrcamento(orcamento) {
  let request = cliente.delete("/orcamento/" + orcamento.uuid)
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

export function removerUnidade(unidade) {
  let request = cliente.delete("/unidade/" + unidade.uuid)
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

export function removerArtefato(artefato) {
  let request = cliente.delete("/artefato/" + artefato.uuid)
  return request
}

export function fazerLogin(loginData) {
  axios.defaults.headers.common['Authorization'] = null
  let request = cliente
    .post("/auth", loginData)
    .then((resultado) => {
      switch (resultado.status) {
        case 200:
          sessionStorage.setItem("jwtToken", resultado.data.token)
          axios.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('jwtToken')
          let usuarioPromise = getUsuario()
          return Promise.all([resultado, usuarioPromise])
        default:
          return resultado
      }
    })
    .catch(err => {
      return {
        ...err,
        error: true
      }
    })
}

export function getUsuario() {
  let request = cliente.get("/usuario")
  return request
}

export function cadastrarUsuario(usuario) {
  let request = cliente.post("/usuario", usuario)
  return request
}

export function reenviarEmail(email) {
  let request = cliente.post("/reenviar/email", {email})
  return request
}

export function validarEmail(validar) {
  let request = cliente.post("/validar", validar)

  return request
}

export function enviarEmailEsqueciSenha(email) {
  let request = cliente.post("/esqueci/senha", {email})
  return request
}

export function alterarSenha(alterarSenha) {
  let request = cliente.post("/alterar/senha", alterarSenha)
  return request
}

export function salvarPagamento(pagamento, orcamento) {
  let request = cliente.post("/orcamento/" + orcamento.uuid + "/pagamento", pagamento)
  return request
}

export function atualizarPagamento(pagamento, orcamento) {
  let request = cliente.put("/orcamento/" + orcamento.uuid + "/pagamento", pagamento)
  return request
}

export function removerPagamento(pagamento) {
  let request = cliente.delete("/orcamento/" + pagamento.orcamentoUuid + "/pagamento")
  return request
}

export function carregaPagamento(orcamento) {
  let request = cliente
    .get("/orcamento/" + orcamento.uuid + "/pagamento")
    .then(req => {
      return Promise.resolve(req)
    })
    .catch(err => {
      if (err.repsonse) {
        return Promise.reject(err.response)
      }
    })
    return request
}

export function calcularPagamento(pagamento, orcamento) {
  let request = cliente.post("/orcamento/" + orcamento.uuid + "/pagamento/calcula", pagamento)
  let pagamentoEnviado = Promise.resolve(pagamento)
  return Promise.all([request, pagamentoEnviado])
}
