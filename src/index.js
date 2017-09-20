import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './app/containers/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import ReduxPromise from 'redux-promise'
import reducers from './reducers/reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducers)
const MaterialApp = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(
  <MaterialApp />
  , document.getElementById('root'))
