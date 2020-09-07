import {
    CHANGE_BANNER,
    CHANGE_RECOMMEND
} from './constants'


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
export default reducer