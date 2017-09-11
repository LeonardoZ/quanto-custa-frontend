import {
  GET_ORCAMENTOS,
  SALVAR_ORCAMENTO,
  SALVAR_UNIDADE,
  EDITAR_ORCAMENTO,
  SALVAR_ARTEFATO,
  FINALIZAR_UNIDADE,
  NOVA_UNIDADE_DE_SOFTWARE,
  NOVO_ORCAMENTO,
  SET_UNIDADE_ATIVA,
  ATUALIZAR_UNIDADE,
  EDITAR_UNIDADE,
  CARREGAR_UNIDADES,
  GET_ARTEFATOS,
  EDITAR_ARTEFATO,
  ATUALIZAR_ARTEFATO,
  NOVO_ARTEFATO
} from '../actions/ActionTypes'

export default (state = {
  orcamento: {},
  orcamentos: [],
  unidadeAtiva: {
  }, // a unique generated id to identify
  unidades: [],
  artefatoAtivo: {},
  artefatos: []
}, action) => {
  switch (action.type) {
    case GET_ORCAMENTOS:
      return getOrcamentos(state, action)
    case SALVAR_ORCAMENTO:
      return salvarOrcamento(state, action)
    case EDITAR_ORCAMENTO:
      return editarOrcamento(state, action)
    case NOVO_ORCAMENTO:
      return novoOrcamento(state, action)
    case NOVA_UNIDADE_DE_SOFTWARE:
      return novaUnidadeDeSoftware(state, action)
    case SALVAR_UNIDADE:
      return salvarUnidade(state, action)
    case CARREGAR_UNIDADES:
      return carregarUnidades(state, action)
    case SALVAR_ARTEFATO:
      return salvarArtefato(state, action)
    case FINALIZAR_UNIDADE:
      return finalizarUnidade(state, action)
    case SET_UNIDADE_ATIVA:
      return setUnidadeParaAtiva(state, action)
    case EDITAR_UNIDADE:
      return editarUnidade(state, action)
    case ATUALIZAR_UNIDADE:
      return atualizarUnidade(state, action)
    case GET_ARTEFATOS:
      return getArtefatos(state, action)
    case EDITAR_ARTEFATO:
      return editarArtefato(state, action)
    case ATUALIZAR_ARTEFATO:
      return atualizarArtefato(state, action)
    case NOVO_ARTEFATO:
      return novoArtefato(state, action)
    default:
      return state
  }
}

function getOrcamentos(state, action) {
  let orcamentosRecebidos = action.payload.data.content
  return { ...state, orcamentos: orcamentosRecebidos }
}

function novoOrcamento(state, action) {
  return {
    ...state,
    orcamento: {},
    unidadeAtiva: {},
    unidades: [],
    artefatoAtivo: {},
    artefatos: []
  }
}

function novaUnidadeDeSoftware(state, action) {
  return {
    ...state, unidadeAtiva: {}
  }
}

function salvarOrcamento(state, action) {
  let orcamento = action.payload.data
  let novoOrcamento = { ...state.orcamento, ...orcamento }
  return { ...state, orcamento: novoOrcamento }
}

function editarOrcamento(state, action) {
  let orcamento = action.payload
  return { ...state, orcamento: orcamento }
}

function salvarUnidade(state, action) {
  let unidade = action.payload.data
  let novaUnidade = { ...state.unidadeAtiva, ...unidade }
  let novaUnidades = [...state.unidades, ...unidade]
  return { ...state, unidades: novaUnidades, unidadeAtiva: novaUnidade }
}

function salvarArtefato(state, action) {
  let artefato = { ...action.payload.data }
  let artefatos = [...state.artefatos, artefato]
  return { ...state, artefatos: artefatos }
}

function finalizarUnidade(state, action) {
  let unidade = state.unidadeAtiva
  let novasUnidades = [...state.unidades, unidade]
  return { ...state, unidades: novasUnidades }
}

function editarUnidade(state, action) {
  let unidade = action.payload
  return { ...state, unidadeAtiva: unidade }
}

function atualizarUnidade(state, action) {
  let unidadeAtualizada = action.payload.data
  let unidadeAtual = state.unidadeAtiva
  let unidadesDiferentesDaAtualizada = state.unidades.filter(u => u.uuid !== unidadeAtual.uuid)
  let novasUnidades = [...unidadesDiferentesDaAtualizada, unidadeAtualizada]
  return { ...state, unidades: novasUnidades, unidadeAtiva: unidadeAtualizada }
}

function carregarUnidades(state, action) {
  let unidades = action.payload.data
  return { ...state, unidades: unidades }
}

function setUnidadeParaAtiva(state, action) {
  let novaUnidade = action.payload
  return { ...state, unidadeAtiva: novaUnidade }
}

function getArtefatos(state, action) {
  let novosArtefatos = action.payload.data
  let artefatosSemOsNovos = state.artefatos.filter(a => a.unidadeUuid !== state.unidadeAtiva.uuid)
  let artefatos = [...artefatosSemOsNovos, ...novosArtefatos]
  return { ...state, artefatos: artefatos }
}

function editarArtefato(state, action) {
  return { ...state, artefatoAtivo: action.payload }
}

function atualizarArtefato(state, action) {
  let artefatoAtualizado = action.payload.data
  let artefatoAtivo = state.artefatoAtivo
  let artefatosDiferentesDoAtualizado = state.artefatos.filter(a => a.uuid !== artefatoAtivo.uuid)
  let novosArtefatos = [...artefatosDiferentesDoAtualizado, artefatoAtualizado]
  return { ...state, artefatos: novosArtefatos, artefatoAtivo: {} }
}

function novoArtefato(state, action) {
  console.log("Novo mesmo")
  return {
    ...state, 
    artefatoAtivo: {
      nome: "",
      custo: 0.0
    }
  }
}
