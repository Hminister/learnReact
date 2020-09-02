import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = applyMiddleware(thunkMiddleWare)

const store = createStore(reducer,
    applyMiddleware(enhancer)
);

export default store