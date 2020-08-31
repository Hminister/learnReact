import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import Profile from './profile'
export default class App extends Component {
    // componentDidMount 中定义数据的变化，当数据发生变化时重新设置 counter;
    // 在发生点击事件时，调用store的dispatch来派发对应的action；

    render () {
        return (
            <div>
                <Home></Home>
                <Profile></Profile>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))