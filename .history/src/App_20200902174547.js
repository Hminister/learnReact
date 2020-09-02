import React, { useState } from 'react'

export default function Counter01 () {
    const [count, setCount] = useState(0)
    const [names, setNames] = useState(["abc", "cba"]);
    const [info, setInfo] = useState({ name: "why", age: 18 });
    return (
        <div>
            <h2>当前计数: {count}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}