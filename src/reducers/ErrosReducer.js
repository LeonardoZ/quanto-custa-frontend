import lidarComErro from './LidarComErro'


export default (state = PADRAO, action) => {
  if (action && action.error) {
    return lidarComErro(state, action)
  } else {
    return {...state, ...PADRAO}
  }
}

const PADRAO = {
  erro: {
    temErro: false,
    mensagem: ""
  }
}
