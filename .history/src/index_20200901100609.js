import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import Profile from './profile'
import { StoreContext } from './utils/context';
import store from './store/index'
export default class App extends Component {

    render () {
        return (
            <div>
                <StoreContext.provider value={store}>
                    <Home></Home>
                    <Profile></Profile>
                </StoreContext.provider>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))