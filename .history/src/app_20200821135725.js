import React, { Component } from 'react';
import { EventEmitter } from 'events'
const eventBus = new EventEmitter()

class Header extends PureComponent {
    render () {
        const { name, age } = this.props;
        return <h2>Header {name + age}</h2>
    }
}

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <Header name="aaa" age={18} />
            </div>
        )
    }
}