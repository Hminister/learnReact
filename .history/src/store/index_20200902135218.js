import { createStore, applyMiddleware } from 'redux'

import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer)

export default store