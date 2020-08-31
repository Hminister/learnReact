import React, { PureComponent } from 'react'
import store from './store'
import { addAction } from './store/actionCreators'

export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { counter: store.getState().counter }
    }
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
                <button onClick={e => this.addCount(1)}>+5</button>
            </div>
        )
    }

    addCount (num) {
        console.log(num)
        store.dispatch(addAction(num))
    }
}
