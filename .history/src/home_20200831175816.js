import React, { PureComponent } from 'react'
import store from './store'
import { addAction } from './store/actionCreators'

export default class Home extends PureComponent {
    render () {
        return (
            <div>
                <h1>HOME</h1>
                <h1>当前基数：{sore.counter}</h1>
                <button onClick={e => this.addCount(1)}>+1</button>
                <button>+5</button>
            </div>
        )
    }

    addCount (num) {
        store.dispatch(addAction(num))
    }
}
