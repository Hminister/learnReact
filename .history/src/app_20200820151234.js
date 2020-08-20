import React, { Component } from 'react'

function Tip (props) {
    return `${name}已经${age}岁了`
}

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { name, age } = this.props
        return `${name}已经${age}岁了`
    }
}

export default class App extends Component {
    render () {
        return (<h1>
            <Content name={'oli'} age={25}></Content>
        </h1>)
    }
}

