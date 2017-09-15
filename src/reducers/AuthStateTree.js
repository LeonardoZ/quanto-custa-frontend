import { DO_LOGIN } from '../actions/ActionTypes'

export default (state = PADRAO, action) => {
  switch (action.type) {
    case DO_LOGIN:
      // TODO
      return { ...state, ...PADRAO }

  }

  return state
}

const PADRAO = {
  isAuthenticated: true

}
