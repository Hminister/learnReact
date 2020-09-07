import { createStore, applyMiddleware, compose } from 'redux'
import createSageMiddleWare from 'redux-saga'
import thunkMiddleWare from 'redux-thunk'
import mySaga from './saga'
import { ProfileReducer } from './profile/index'
import { HomeReducer } from './home/reducer'

function mergeReducer () {
    return {
        homeStore: HomeReducer,
        profileStore: ProfileReducer
    }
}

const reducer = mergeReducer()
const sageMiddleWare = createSageMiddleWare()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleWare, sageMiddleWare))

const store = createStore(reducer, enhancer);

sageMiddleWare.run(mySaga)

export default store