function lidarComErro(state, action) {
  if (action.payload.response) {
    let data = action.payload.response.data
    return { ...state, 
      erro: { 
          temErro: true, 
          mensagem: data.mensagem, 
          status: data.status
        } 
      }
  } else {
    let mensagem = action.payload.message
    return { ...state, erro: { temErro: true, mensagem: mensagem } }
  }

}
export default lidarComErro