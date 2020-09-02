import React, { useState } from 'react'

export default function Counter01 () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>当前计数: {this.state.counter}</h2>
            <button onClick={e => this.setCount()}>+1</button>
            <button onClick={e => this.setCount()}>-1</button>
        </div>
    )
}