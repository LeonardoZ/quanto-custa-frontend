import {
  FAZER_LOGIN,
  CADASTRAR_USUARIO,
  GET_USUARIO,
  REENVIAR_EMAIL,
  VALIDAR_EMAIL,
  ENVIAR_EMAIL_SENHA,
  ALTERAR_SENHA,
  LIMPAR_CADASTRO
} from './AuthActionTypes'
// TODO - procurar alternative para isso

const PADRAO = {
  isAuthenticated: false,
  token: "",
  cadastroSucesso: false,
  conflito: false,
  usuarioAtivo: {},
  validando: false,
  jaValidado: false,
  alterando: false,
  jaAlterado: false
}

export default(state = PADRAO, action) => {
  switch (action.type) {
    case FAZER_LOGIN:
      return fazerLogin(state, action)
    case CADASTRAR_USUARIO:
      return cadastrarUsuario(state, action)
    case LIMPAR_CADASTRO:
      return limparCadastro(state, action)
    case GET_USUARIO:
      return getUsuario(state, action)
    case REENVIAR_EMAIL:
      return reenviarEmail(state, action)
    case ENVIAR_EMAIL_SENHA:
      return enviarEmailSenha(state, action)
    case VALIDAR_EMAIL:
      return validarEmail(state, action)
    case ALTERAR_SENHA:
      return alterarSenha(state, action)
    default:
      return state
  }
}

function cadastrarUsuario(state, action) {
  let status = action.payload.status
  switch (status) {
    case 201:
      return {
        ...state,
        conflito: false,
        cadastroSucesso: true
      }
    case 409:
      return {
        ...state,
        conflito: true,
        cadastroSucesso: false
      }
    default:
      return state
  }
}

function limparCadastro(state, action) {
  return {
    ...state,
    cadastroSucesso: false,
    conflito: false
  }
}

function fazerLogin(state, action) {
  let status = action.payload[0] === undefined ? action.payload.status : action.payload[0].status
  switch (status) {
    case 200:
      let tokenRequest = action.payload[0]
      let usuarioRequest = action.payload[1]
      return {
        ...state,
        token: tokenRequest.data.token,
        isAuthenticated: true,
        usuarioAtivo: usuarioRequest.data
      }
    default:
      return {
        ...state, 
        token: null,
        isAuthenticated: false,
        usuarioAtivo: {}
      }
  }
}

function getUsuario(state, action) {
  let usuario = action.payload.data
  return {
    ...state,
    usuarioAtivo: usuario,
    isAuthenticated: usuario
      ? true
      : false
  }
}

function reenviarEmail(state, action) {
  return {
    ...state
  }
}

function enviarEmailSenha(state, action) {
  return {
    ...state
  }
}

function validarEmail(state, action) {
  let status = action.payload.status
  switch (status) {
    case 200:
      return {
        ...state,
        validando: true
      }
    case 226:
      return {
        ...state,
        validando: false,
        jaValidado: true
      }
    case 400:
      return {
        ...state,
        validando: false
      }
    default:
      return state
  }
}

function alterarSenha(state, action) {
  let status = action.payload.status
  switch (status) {
    case 200:
      return {
        ...state,
        alterando: true
      }
    case 226:
      return {
        ...state,
        alterando: false,
        jaAlterado: true
      }
    case 400:
      return {
        ...state,
        alterando: false
      }
    default:
      return state
  }
}