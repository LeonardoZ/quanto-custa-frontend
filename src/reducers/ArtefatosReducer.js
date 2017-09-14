import {
  SALVAR_ARTEFATO,
  GET_ARTEFATOS,
  EDITAR_ARTEFATO,
  ATUALIZAR_ARTEFATO,
  NOVO_ARTEFATO
} from '../actions/ActionTypes'

export default (state = {
  artefatoAtivo: {
    nome: "",
    custo: 0.00
  },
  artefatos: [],
  artefatosCarregando: false
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
    default:
      return state
  }
}

function getArtefatos(state, action) {
  let novosArtefatos = action.payload[0].data
  let unidadeAtiva = action.payload[1]
  let artefatosSemOsNovos = state.artefatos.filter(a => a.unidadeUuid !== unidadeAtiva.uuid)
  let artefatos = [...artefatosSemOsNovos, ...novosArtefatos]
  return { ...state, artefatos: artefatos }
}

function salvarArtefato(state, action) {
  let artefato = { ...action.payload.data }
  let artefatos = [...state.artefatos, artefato]
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
  return {
    ...state,
    artefatoAtivo: {
      nome: "",
      custo: 0.0
    }
  }
}
