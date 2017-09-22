import { FAZER_LOGIN, GET_USUARIO, CADASTRAR_USUARIO } from './AuthActionTypes'

import * as api from '../../api/QuantoCustaApi'

export function fazerLogin(dadosLogin) {
  let request = api.fazerLogin(dadosLogin)
  return {
    "type": FAZER_LOGIN,
    "payload": request
  }
}

export function cadastrarUsuario(unidade, data) {
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
