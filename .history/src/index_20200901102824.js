import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import Profile from './profile'
// import { StoreContext } from './utils/context';
import { Provider } from 'react-redux'
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
    <Context store={store}>
        <App />
    </Context>,
    document.getElementById('root'))