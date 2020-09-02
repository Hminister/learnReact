import { createStore, applyMiddleware } from 'redux'

import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

const enhancer = applyMiddleware(thunkMiddleWare)
const store = createStore(reducer, enhancer)

export default store