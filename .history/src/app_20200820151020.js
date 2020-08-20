import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props)

    }
    render () {
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

