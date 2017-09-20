import lidarComErro from './LidarComErro'

export default (state = PADRAO, action) => {
  if (action && action.error || (action.payload && action.payload.error)) {
    return lidarComErro(state, action)
  } else {
    return {...state, ...PADRAO}
  }
}

const PADRAO = {
  erro: {
    temErro: false,
    mensagem: "",
    status: 0
  }
}
