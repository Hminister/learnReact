import counterReducer from './profile/index'
import HomeReducer from './home/index'
import { combineReducers } from 'redux';

const initialState = {

}
function combineReducers ({
    couterInfo: counterReducer(state.couterInfo, action),
        homeInfo: HomeReducer(state.homeInfo, action)
})

export default mergeReducer