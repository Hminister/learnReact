const redux = require('redux')

import reducer from './reducer'

const store = redux.createStore(reducer)

export default store