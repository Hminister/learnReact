import counterReducer from './profile/index'
import HomeReducer from './home/index'


const initialStatereducer = {

}
function mergeReducer (state = initialState, action) {
    return {
        couterInfo: counterReducer(state = initialState, action),
        homeInfo: HomeReducer(state = initialState, action)
    }
}

export default mergeReducer