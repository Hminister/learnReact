import {
    ADD_COUNT,
    CHANGE_BANNER,
    CHANGE_RECOMMEND
} from './constants'


const initialState = {
    counter: 0,
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, counter: state.counter + action.num };
        default:
            return state;
    }
}
export default reducer