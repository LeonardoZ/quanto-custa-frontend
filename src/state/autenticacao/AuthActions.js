import { FAZER_LOGIN, GET_USUARIO, 
         CADASTRAR_USUARIO, REENVIAR_EMAIL, 
         VALIDAR_EMAIL } from './AuthActionTypes'

import * as api from '../../api/QuantoCustaApi'

export function fazerLogin(dadosLogin) {
  let request = api.fazerLogin(dadosLogin)
  return {
    "type": FAZER_LOGIN,
    "payload": request
  }
}

export function cadastrarUsuario(usuario) {
  let request = api.cadastrarUsuario(usuario)
  return {
    "type": CADASTRAR_USUARIO
  }
}

export function getUsuario() {
  let token = sessionStorage.getItem("jwtToken")
  let request = api.getUsuario()
  return {
    "type": GET_USUARIO,
    "payload": request
  }
}

export function reenviarEmail(email, callback) {
  let request = api.reenviarEmail(email)
  return {
    "type": REENVIAR_EMAIL,
    "payload": request
  }
}


export function validarEmail(validar) {
  let request = api.validarEmail(validar)
  return {
    "type": VALIDAR_EMAIL,
    "payload": request
  }
}