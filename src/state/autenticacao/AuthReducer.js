import { FAZER_LOGIN, CADASTRAR_USUARIO, GET_USUARIO } from './AuthActionTypes'
// TODO - procurar alternative para isso 

const PADRAO = {
  isAuthenticated: false,
  token: "",
  usuarioAtivo: {}
}

export default (state = PADRAO, action) => {
  switch (action.type) {
    case FAZER_LOGIN:
      return fazerLogin(state, action)
    case CADASTRAR_USUARIO:
      return cadastrarUsuario(state, action)
    case GET_USUARIO:
      return getUsuario(state, action)
    default:
      return state
  }
}

function cadastrarUsuario(state, action) {

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
  return {...state, usuarioAtivo: usuario, isAuthenticated: usuario ? true : false}
}

