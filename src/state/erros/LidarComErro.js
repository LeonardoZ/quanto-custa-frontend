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
    let mensagem = action.payload ? action.payload.response.data.message : "Serviço indisponível"
    return { ...state, erro: { temErro: true, mensagem: mensagem } }
  }

}
export default lidarComErro