import {
    ADD_COUNT
} from './constants'

const addAction = (count) => ({
    type: ADD_COUNT,
    number: count
});

export {
    addAction
}