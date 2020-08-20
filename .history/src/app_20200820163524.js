import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <p>{this.props.children[0]}</p>
                <p>{this.props.children[1]}</p>
                <p>{this.props.children[2]}</p>
                <div>{this.props.endSlot}</div>
            </div>
        )

    }
}
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const slot = <button>点击按钮</button>
        return (
            <NavBar endSlot={slot}>
                <span>返回</span>
                <span>搜索</span>
                <span>更多</span>
            </NavBar>
        )

    }
}