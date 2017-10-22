function lidarComErro(state, action) {
  // TODO unificar no backend estrutura de retorna do exceptions previstas ou não
  if (action.payload.data) {
    let data = action.payload.data
    return { ...state, 
      erro: { 
          temErro: true, 
          mensagem: data.mensagem, 
          status: data.status
        } 
      }
  } else {
    let mensagem = action.payload.response.data.message
    return { ...state, erro: { temErro: true, mensagem: mensagem } }
  }

}
export default lidarComErro