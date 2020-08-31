import redux from 'react-redux'

import {
    ADD_COUNT
} from './constants'

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNT":
            return { ...state, counter: action.num + state.counter }
        default:
            return state
    }
}

export default store = redux.createStore(reducer)