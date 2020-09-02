import React, { useState, useEffect } from 'react';

export default function CounterTitle01 () {
    const [count, useCount] = useState(0)
    useEffect(() => {
        document.title = `当前计数: ${this.state.counter}`
    })
    return (
        <div>
            <h2>当前计数: {this.state.counter}</h2>
            <button onClick={e => this.increment()}>+1</button>
            <button onClick={e => this.decrement()}>-1</button>
        </div>
    )
}