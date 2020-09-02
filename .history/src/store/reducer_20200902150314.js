import {
    ADD_COUNT,
    CHANGE_BANNER,
    CHANGE_RECOMMEND
} from './constants'


const initialState = {
    counter: 0,
}

function counterReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, counter: state.counter + action.num };
        default:
            return state;
    }
}

const initialState = {
    banners: [],
    recommends: []
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_BANNER:
            return { ...state, banners: action.banners };
        case CHANGE_RECOMMEND:
            return { ...state, recommends: action.recommends };
        default:
            return state;
    }
}

const initialState = {
}

function reducer (state = initialState, action) {
    return {
        counterInfo: counterReducer(state.counterInfo, action),
        homeInfo: homeReducer(state.homeInfo, action),
    }
}
export default reducer