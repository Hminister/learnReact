import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props)
    }
}

export default class App extends Component {
    render () {
        return (<h1>
            <Content></Content>
        </h1>)
    }
}

