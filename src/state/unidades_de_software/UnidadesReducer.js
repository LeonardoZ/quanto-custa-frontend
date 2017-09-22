import {
  NOVA_UNIDADE_DE_SOFTWARE,
  SALVAR_UNIDADE,
  SET_UNIDADE_ATIVA,
  ATUALIZAR_UNIDADE,
  EDITAR_UNIDADE,
  CARREGAR_UNIDADES,
  FINALIZAR_UNIDADE
} from './UnidadesActionTypes'

export default (state = {
  unidadeAtiva: {}, 
  unidades: [],
  unidadesCarregando: false,
 
}, action) => {

  if (action.error) { return state }
  switch (action.type) {
    case NOVA_UNIDADE_DE_SOFTWARE:
      return novaUnidadeDeSoftware(state, action)
    case SALVAR_UNIDADE:
      return salvarUnidade(state, action)
    case CARREGAR_UNIDADES:
      return carregarUnidades(state, action)
    case FINALIZAR_UNIDADE:
      return finalizarUnidade(state, action)
    case SET_UNIDADE_ATIVA:
      return setUnidadeParaAtiva(state, action)
    case EDITAR_UNIDADE:
      return editarUnidade(state, action)
    case ATUALIZAR_UNIDADE:
      return atualizarUnidade(state, action)
    default:
      return state
  }
}


function novaUnidadeDeSoftware(state, action) {
  return {
    ...state, unidadeAtiva: {}
  }
}

function salvarUnidade(state, action) {
  let unidade = action.payload.data
  let novaUnidade = { ...state.unidadeAtiva, ...unidade }
  let novaUnidades = [...state.unidades, ...unidade]
  return { ...state, unidades: novaUnidades, unidadeAtiva: novaUnidade }
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
  let novasUnidades = action.payload[0].data
  let orcamentoAtivo = action.payload[1]
  let unidadesSemOsNovos = state.unidades.filter(a => a.orcamentoUuid !== orcamentoAtivo.uuid) || []
  let unidades = [...unidadesSemOsNovos, ...novasUnidades]
  return { ...state, unidades: unidades }
}

function setUnidadeParaAtiva(state, action) {
  let novaUnidade = action.payload
  return { ...state, unidadeAtiva: novaUnidade }
}
