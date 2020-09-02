import { all, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

import {
    FETCH_HOME_MULTIDATA
} from "./constants";
import {
    changeBannersAction,
    changeRecommendsAction,
} from './actionCreators';