import React, { PureComponent } from 'react'

import { addAction } from './store/actionCreators'

export default class Home extends PureComponent {
    // componentDidMount 中定义数据的变化，当数据发生变化时重新设置 counter;

    componentDidMount () {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    render () {
        return (
            <div>
                <h1>HOME</h1>
                <h1>当前基数：{this.state.counter}</h1>
                <button onClick={e => this.addCount(1)}>+1</button>
                <button onClick={e => this.addCount(5)}>+5</button>
            </div>
        )
    }

    addCount (num) {
        // 在发生点击事件时，调用store的dispatch来派发对应的action；
        store.dispatch(addAction(num))
    }
}
