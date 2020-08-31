import {
    ADD_COUNT
} from './constants'

const addAction = (count) => ({
    type: ADD_COUNT,
    num: count
});

export {
    addAction
}