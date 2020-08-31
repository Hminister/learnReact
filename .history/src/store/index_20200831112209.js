import redux from 'react-redux'

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNT":
            return { ...state, counter: action.num + state.counter }
        default:
            break;
    }
    return state
}

export default store = redux.createStore(reducer)