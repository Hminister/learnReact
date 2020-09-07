import { reducer as counterReducer } from './profile/index'
// import { reducer as HomeReducer } from './home/reducer'


const initialStatereducer = {

}
function mergeReducer (state = initialState, action) {
    return {
        couterInfo: counterReducer(state = initialState, action),
        // homeInfo: HomeReducer(state = initialState, action)
    }
}

export default mergeReducer