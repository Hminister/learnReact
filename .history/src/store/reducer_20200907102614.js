import counterReducer from './profile/index'
import HomeReducer from './home/index'
import { combineReducers } from 'redux';

const initialState = {

}
function mergeReducer (state = initialState, action) {
    return {
        couterInfo: counterReducer(state.couterInfo, action),
        homeInfo: HomeReducer(state.homeInfo, action)
    }
}

export default mergeReducer