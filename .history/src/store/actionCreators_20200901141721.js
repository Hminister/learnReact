import {
    ADD_COUNT,
    CHANGE_BANNER,
    CHANGE_RECOMMEND
} from './constants'

const addAction = (count) => ({
    type: ADD_COUNT,
    num: count
});

const changeBannersAction = (banners) => ({
    type: CHANGE_BANNER,
    banners
})

const changeRecommendsAction = (recommends) => ({
    type: CHANGE_RECOMMEND,
    recommends
})
export {
    addAction, changeBannersAction,
    changeRecommendsAction
}