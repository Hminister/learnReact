import React, { PureComponent } from 'react'
import connect from './utils/connect'
import { addAction } from './store/actionCreators'
import { addAction } from './store/actionCreators'

class Profile extends PureComponent {
    render () {
        return (
            <div>
                <h1>Profile</h1>
                <h1>当前基数：{this.props.counter}</h1>
                <button onClick={e => this.props.addCount(-1)}>-1</button>
                <button onClick={e => this.props.addCount(-5)}>-5</button>
            </div>
        )
    }
}

export default 
