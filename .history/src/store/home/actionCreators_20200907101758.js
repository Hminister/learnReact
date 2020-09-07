import axios from 'axios'

import {
    CHANGE_BANNER,
    CHANGE_RECOMMEND,
    FETCH_HOME_MULTIDATA
} from './constants'
const changeBannersAction = (banners) => ({
    type: CHANGE_BANNER,
    banners
})

const changeRecommendsAction = (recommends) => ({
    type: CHANGE_RECOMMEND,
    recommends
})

//使用redux-thunk 返回一个函数

// const getHomeMultidataAction = () => {
//     return (dispatch) => {
//         axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
//             const data = res.data.data;
//             console.log(data)
//             dispatch(changeBannersAction(data.banner.list));
//             dispatch(changeRecommendsAction(data.recommend.list));
//         })
//     }
// }

//使用redux-saga 返回一个对象，拿到对应的actiontype
const getHomeMultidataAction = () => ({
    type: FETCH_HOME_MULTIDATA
})

export {
    changeBannersAction,
    changeRecommendsAction,
    getHomeMultidataAction
}