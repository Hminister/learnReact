import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import Profile from './profile'
// import { StoreContext } from './utils/context';
import { context } from 'react-redux'
import store from './store/index'
export default class App extends Component {

    render () {
        return (
            <div>
                <Home></Home>
                <Profile></Profile>
            </div>
        )
    }
}

ReactDOM.render(
    <context store={store}>
        <App />
    </context>,
    document.getElementById('root'))