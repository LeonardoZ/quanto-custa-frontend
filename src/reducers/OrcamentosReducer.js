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
  SET_UNIDADE_PARA_ATIVA,
  ATUALIZAR_UNIDADE,
  CARREGAR_UNIDADES

} from '../actions/ActionTypes'

export default (state = {
  /*  orcamento: {
     nome: "Software para tempos e movimentos",
     cliente: "Sophie houdson",
     responsavel: "Leonardo Zapparoli"
   }, */
  orcamento: {

  },
  orcamentos: [],
  unidadeAtiva: {
  }, // a unique generated id to identify
  unidades: [],
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
    case ATUALIZAR_UNIDADE:
      return atualizarUnidade(state, action)
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
  let novaUnidades = { ...state.unidades, ...unidade }
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

function atualizarUnidade(state, action) {
  let unidade = state.unidadeAtiva
  let unidadesDiferentesDaAtualizada = state.unidades
    .filter(u => u.id !== unidade.id)
  let novasUnidades = [...unidadesDiferentesDaAtualizada, unidade]
  return { ...state, unidades: novasUnidades }
}

function carregarUnidades(state, action) {
  let unidades = action.payload.data
  return { ...state, unidades: unidades }
}

function setUnidadeParaAtiva(state, action) {
  let novaUnidade = action.payload
  console.log(state)
  console.log(state.unidade)
  return { ...state, unidadeAtiva: novaUnidade }
}

