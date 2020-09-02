import { all, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import {
    FETCH_HOME_MULTIDATA
} from "./constants";
import {
    changeBannersAction,
    changeRecommendsAction,
} from './actionCreators';

function* fetchHomeMutidata () {
    const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
    console.log(res)
    const data = res.data.data
    yield all([
        put(changeBannersAction, data.banners.list),
        put(changeRecommendsAction, data.recommend.list)
    ])
}