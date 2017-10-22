import {limparErro} from './ErrosActionTypes'
import lidarComErro from './LidarComErro'

const PADRAO = {
  erro: {
    temErro: false,
    mensagem: "",
    status: 0
  }
}

export default(state = PADRAO, action) => {
  if ((action && action.error) || (action.payload && action.payload.error) || (action.payload && action.payload.status >= 400)) {
    console.log("Erro")
    return lidarComErro(state, action)
  } else if (action.type === limparErro) {
    return {
      ...PADRAO
    }
  } else {
    return {
      ...state,
      ...PADRAO
    }
  }
}
