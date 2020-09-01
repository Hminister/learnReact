import React, { PureComponent } from 'react'

import { addAction } from './store/actionCreators'

export default function Home () {
    return (
        <div>
            <h1>HOME</h1>
            <h1>当前基数：{this.state.counter}</h1>
            <button onClick={e => this.addCount(1)}>+1</button>
            <button onClick={e => this.addCount(5)}>+5</button>
        </div>
    )
}
