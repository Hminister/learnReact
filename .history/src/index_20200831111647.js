import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import home from './home'
export default class App extends Component {


    render () {
        return (
            <div>
                <Home></Home>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))