import counterReducer from './profile/index'
import HomeReducer from './home/index'


const initialState = {

}
function reducer (state = initialState, action) {
    return {
        couterInfo: counterReducer(state.couterInfo, action),
        homeInfo: HomeReducer(state.homeInfo, action)
    }
}



export default mergeReducer