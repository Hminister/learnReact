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
            </div>
        )

    }
}
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        <NavBar>
            <sppn>返回</sppn>
            <sppn>搜索</sppn>
            <sppn>更多</sppn>
        </NavBar>
    }
}