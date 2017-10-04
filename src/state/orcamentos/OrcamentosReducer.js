import {
  GET_ORCAMENTOS,
  SALVAR_ORCAMENTO,
  EDITAR_ORCAMENTO,
  NOVO_ORCAMENTO,
  CARREGANDO_ORCAMENTO,
  REMOVER_ORCAMENTO
} from './OrcamentosActionTypes'

export default (state = {
  orcamento: {},
  orcamentos: [],
  carregandoOrcamento: true,
}, action) => {
  if (action.error) { return state }
  switch (action.type) {
    case GET_ORCAMENTOS:
      return getOrcamentos(state, action)
    case SALVAR_ORCAMENTO:
      return salvarOrcamento(state, action)
    case EDITAR_ORCAMENTO:
      return editarOrcamento(state, action)
    case REMOVER_ORCAMENTO:
      return removerOrcamento(state, action)
    case NOVO_ORCAMENTO:
      return novoOrcamento(state, action)
    case CARREGANDO_ORCAMENTO:
      return carregandoOrcamento(state, action)
    default:
      return state
  }
}

function carregandoOrcamento(state, action) {
  return { ...state, carregandoOrcamento: true }
}

function getOrcamentos(state, action) {
  let orcamentosRecebidos = action.payload.data.content
  return { ...state, orcamentos: orcamentosRecebidos, carregandoOrcamento: false }
}

function novoOrcamento(state, action) {
  return {
    ...state,
    orcamento: {}
  }
}
function removerOrcamento(state, action) {
  if (action.payload.status === 200) {
    return { ...state,
             orcamento: {}, 
             orcamentos: state.orcamentos.filter(o => o.uuid !== action.payload.data.uuid), 
             carregandoOrcamento: false }
  } else {
    return state
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
