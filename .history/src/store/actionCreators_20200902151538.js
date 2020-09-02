import axios from 'axios'
import {
    ADD_COUNT,
    CHANGE_BANNER,
    CHANGE_RECOMMEND,
    FETCH_HOME_MULTIDATA
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

//使用redux-thunk

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

const getHomeMultidataAction = () => ({
    type: FETCH_HOME_MULTIDATA
})
export {
    addAction,
    changeBannersAction,
    changeRecommendsAction,
    getHomeMultidataAction
}