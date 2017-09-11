import React from 'react'
import ReactDOM from 'react-dom'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './app/App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import ReduxPromise from 'redux-promise'
import reducers from './reducers/Reducers'



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
