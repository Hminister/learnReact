import { createStore, applyMiddleware, compose } from 'redux'
import createSageMiddleWare from 'redux-saga'
import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

const sageMiddleWare = createSageMiddleWare()s
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleWare))

const store = createStore(reducer, enhancer);

export default store