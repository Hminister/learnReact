import {
    ADD_COUNT,
} from './constants'


const initialCounter = {
    counter: 0,
}

function reducer (state = initialCounter, action) {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, counter: state.counter + action.num };
        default:
            return state;
    }
}
export default reducer