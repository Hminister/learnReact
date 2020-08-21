import React, { Component } from 'react';
import { EventEmitter } from 'events'
const eventBus = new EventEmitter()

class ProfileHeader extends Component {
    render () {
        return (
            <div>
                <button>按钮</button>
            </div>
        )
    }

}



class Profile extends Component {
    render () {
        return (
            <div>
                <ProfileHeader />
                <ul>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                    <li>设置4</li>
                    <li>设置5</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    componentDidMount () {
        eventBus.addListener('headClick', this.headClick)
    }
    render () {
        return (
            <div>
                <Profile />
                <h2>其他内容</h2>
            </div>
        )
    }
}