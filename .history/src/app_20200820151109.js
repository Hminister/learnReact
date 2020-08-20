import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render () {

        const { name, age } = this.props
        return {

        }
    }
}

export default class App extends Component {
    render () {
        return (<h1>
            <Content name={'oli'} age={25}></Content>
        </h1>)
    }
}

