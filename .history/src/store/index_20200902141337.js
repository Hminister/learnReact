import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(enhancer)
));
const enhancer = applyMiddleware(thunkMiddleWare)

export default store