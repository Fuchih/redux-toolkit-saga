import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import catsReducer from './catState'
import catSaga from './catSaga'

const saga = createSagaMiddleware()
const store = configureStore({
  reducer: { cats: catsReducer },
  middleware: [saga]
})

saga.run(catSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
