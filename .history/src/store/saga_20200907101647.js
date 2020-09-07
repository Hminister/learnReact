import { all, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import {
    FETCH_HOME_MULTIDATA
} from "./constants";

import {
    changeBannersAction,
    changeRecommendsAction,
} from './home/actionCreators';

function* fetchHomeMutidata () {
    const res = yield axios.get('http://123.207.32.32:8000/home/multidata')

    const data = res.data.data
    yield all([
        put(changeBannersAction(data.banner.list)),
        put(changeRecommendsAction(data.recommend.list))
    ])
}

function* mySaga () {
    yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMutidata)
}

export default mySaga