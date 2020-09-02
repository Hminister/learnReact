import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
+ const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    - const store = createStore(reducer, /* preloadedState, */ compose(
        applyMiddleware(...middleware)
    ));
const enhancer = applyMiddleware(thunkMiddleWare)
const store = createStore(reducer, enhancer)

export default store