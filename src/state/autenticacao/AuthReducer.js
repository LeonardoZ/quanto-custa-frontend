import {
  FAZER_LOGIN, CADASTRAR_USUARIO,
  GET_USUARIO, REENVIAR_EMAIL,
  VALIDAR_EMAIL
} from './AuthActionTypes'
// TODO - procurar alternative para isso 

const PADRAO = {
  isAuthenticated: false,
  token: "",
  usuarioAtivo: {},
  validando: false,
  jaValidado: false
}

export default (state = PADRAO, action) => {
  switch (action.type) {
    case FAZER_LOGIN:
      return fazerLogin(state, action)
    case CADASTRAR_USUARIO:
      return cadastrarUsuario(state, action)
    case GET_USUARIO:
      return getUsuario(state, action)
    case REENVIAR_EMAIL:
      return reenviarEmail(state, action)
    case VALIDAR_EMAIL:
      return validarEmail(state, action)
    default:
      return state
  }
}

function cadastrarUsuario(state, action) {
  return state
}

function fazerLogin(state, action) {
  let tokenRequest = action.payload[0]
  let usuarioRequest = action.payload[1]
  if (tokenRequest && tokenRequest.data && tokenRequest.status === 200) {
    return {
      ...state,
      token: tokenRequest.data.token,
      isAuthenticated: true,
      usuarioAtivo: usuarioRequest.data
    }
  }
  return { ...state }
}

function getUsuario(state, action) {
  let usuario = action.payload.data
  return { ...state, usuarioAtivo: usuario, isAuthenticated: usuario ? true : false }
}

function reenviarEmail(state, action) {
  return { ...state }
}

function validarEmail(state, action) {
  let status = action.payload.status
  switch (status) {
    case 200:
      return { ...state, validando: true }
    case 226:
      return { ...state, validando: false, jaValidado: true }
    case 400:
      return { ...state, validando: false }

  } 
  return {...state}
}