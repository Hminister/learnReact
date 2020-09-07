import counterReducer from './profile/index'
import HomeReducer from './home/index'
import { combineReducers } from 'redux'


const initialState = {

}
// function reducer (state = initialState, action) {
//     return {
//         couterInfo: counterReducer(state.couterInfo, action),
//         homeInfo: HomeReducer(state.homeInfo, action)
//     }
// }

const reducer = combineReducers({
    couterInfo: counterReducer,
    homeInfo: HomeReducer
})

export default reducer