import React, { PureComponent } from 'react'

export default class home extends PureComponent {
    render () {
        return (
            <div>
                <h1>HOME</h1>
                <h1>当前基数：{sore.counter}</h1>
                <button>+1</button>
            </div>
        )
    }
}
