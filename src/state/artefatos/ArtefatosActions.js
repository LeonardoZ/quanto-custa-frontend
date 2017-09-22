
import {
  SALVAR_ARTEFATO, EDITAR_ARTEFATO,
  NOVO_ARTEFATO, GET_ARTEFATOS, ATUALIZAR_ARTEFATO
} from './ArtefatosActionTypes'

import * as api from '../../api/QuantoCustaApi'

export function getArtefatos(unidade) {
  let request = api.getArtefatos(unidade)
  return {
    "type": GET_ARTEFATOS,
    "payload": request
  }
}

export function salvarArtefato(unidadeAtiva, artefato) {
  let request = api.salvarArtefato(unidadeAtiva, artefato)
  return {
    "type": SALVAR_ARTEFATO,
    "payload": request
  }
}

export function editarArtefato(artefato) {
  console.log("Editar")
  console.log(artefato)
  return {
    "type": EDITAR_ARTEFATO,
    "payload": artefato
  }
}

export function atualizarArtefato(artefatoAtivo, data) {
  let request = api.atualizarArtefato(artefatoAtivo, data)
  return {
    "type": ATUALIZAR_ARTEFATO,
    "payload": request
  }
}

export function novoArtefato() {
  return {
    "type": NOVO_ARTEFATO,
  }
}
