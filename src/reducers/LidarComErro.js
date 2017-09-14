function lidarComErro(state, action) {
  if (action.payload) {
    let mensagem = action.payload.response.data.mensagem
    return { ...state, erro: { temErro: true, mensagem: mensagem } }
  } else {
    return { ...state, erro: { temErro: true, mensagem: action.payload.message } }
  }

}
export default lidarComErro