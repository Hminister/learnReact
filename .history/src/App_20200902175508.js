import React, { useState, useEffect } from 'react';

export default function CounterTitle01 () {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState('hello')
    useEffect(() => {
        console.log("网络请求");
    }, [count]);

    useEffect(() => {
        console.log("修改DOM");
    })

    useEffect(() => {
        console.log("事件监听");

        return () => {
            console.log("取消监听");
        }
    })
    return (
        <div>
            <h2>当前计数: {count}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}