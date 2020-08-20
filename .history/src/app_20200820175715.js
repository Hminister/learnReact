import React, { Component } from 'react';

const UserContext = React.createContext({ nickname: "默认", level: -1 })
function ProfileHeader (props) {
    return (
        <div>
            <h2>用户昵称: {props.nickname}</h2>
            <h2>用户等级: {props.level}</h2>
        </div>
    )
}

class Profile extends Component {
    render () {
        return (
            <div>
                <ProfileHeader {...this.props} />
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
    constructor() {
        super();

        this.state = {
            nickname: "coderwhy",
            level: 99
        }
    }

    render () {
        const { nickname, level } = this.state;
        const props = { nickname, level }
        return (
            <div>
                <UserContext.Provider>
                    <Profile {...props} />
                </UserContext.Provider>
                <h2>其他内容</h2>
            </div>
        )
    }
}