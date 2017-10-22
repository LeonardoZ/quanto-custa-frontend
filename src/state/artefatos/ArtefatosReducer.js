import {
  SALVAR_ARTEFATO,
  GET_ARTEFATOS,
  EDITAR_ARTEFATO,
  ATUALIZAR_ARTEFATO,
  NOVO_ARTEFATO,
  CARREGANDO_ARTEFATOS,
  REMOVER_ARTEFATO
} from './ArtefatosActionTypes'

const ARTEFATO_ATIVO = {
  nome: "",
  custo: 0.0
}

export default (state = {
  artefatoAtivo: ARTEFATO_ATIVO,
  artefatos: [],
  carregandoArtefatos: false,
  carregadoMasVazio: false
}, action) => {

  if (action.error) { return state }
  switch (action.type) {
    case GET_ARTEFATOS:
      return getArtefatos(state, action)
    case SALVAR_ARTEFATO:
      return salvarArtefato(state, action)
    case EDITAR_ARTEFATO:
      return editarArtefato(state, action)
    case ATUALIZAR_ARTEFATO:
      return atualizarArtefato(state, action)
    case NOVO_ARTEFATO:
      return novoArtefato(state, action)
    case CARREGANDO_ARTEFATOS:
      return carregando(state, action)    
    case REMOVER_ARTEFATO:
      return removerArtefato(state, action)
    default:
      return state
  }
}

function getArtefatos(state, action) {
  let novosArtefatos = action.payload[0].data
  if (novosArtefatos.length === 0)
    return { ...state, carregadoMasVazio: true }
  let unidadeAtiva = action.payload[1]
  let artefatosSemOsNovos = state.artefatos.filter(a => a.unidadeUuid !== unidadeAtiva.uuid)
  let artefatos = [...artefatosSemOsNovos, ...novosArtefatos]
  return { ...state, artefatos: artefatos, carregandoArtefatos: false }
}

function salvarArtefato(state, action) {
  let artefato = { ...action.payload.data }
  let artefatos = [...state.artefatos, artefato]
  return { ...state, artefatos: artefatos, artefatoAtivo: ARTEFATO_ATIVO }
}

function editarArtefato(state, action) {
  return { ...state, artefatoAtivo: action.payload }
}

function atualizarArtefato(state, action) {
  let artefatoAtualizado = action.payload.data
  let artefatosDiferentesDoAtualizado = state.artefatos.filter(a => a.uuid !== artefatoAtualizado.uuid)
  let novosArtefatos = [...artefatosDiferentesDoAtualizado, artefatoAtualizado]
  return { ...state, artefatos: novosArtefatos, artefatoAtivo: ARTEFATO_ATIVO }
}

function novoArtefato(state, action) {
  return {
    ...state,
    artefatoAtivo: ARTEFATO_ATIVO
  }
}

function carregando(state, action) {
  return {
    ...state,
    carregandoArtefatos: true
  }
}

function removerArtefato(state, action) {
  if (action.payload.status === 200) {
    return { ...state,
             artefatoAtivo: ARTEFATO_ATIVO, 
             artefatos: state.artefatos.filter(a => a.uuid !== action.payload.data.uuid), 
             carregandoArtefatos: false }
  } else {
    return state
  }
}