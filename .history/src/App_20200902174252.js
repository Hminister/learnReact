import React, { useState } from 'react'

export default function Counter01 () {
    return (
        <div>
            <h2>当前计数: {this.state.counter}</h2>
            <button onClick={e => this.increment()}>+1</button>
            <button onClick={e => this.decrement()}>-1</button>
        </div>
    )

}