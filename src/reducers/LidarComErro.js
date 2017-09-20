function lidarComErro(state, action) {
  console.log(action)
  if (action.payload.response) {
    let data = action.payload.response.data
    console.log(data)
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