import React, { Component } from 'react';

import { EventEmitter } from 'events'


const UserContext = React.createContext({ nickname: "默认", level: -1 })
const ThemeContext = React.createContext({ color: "green" });


function ProfileHeader (props) {

    return (
        <div>
            <UserContext.Consumer>
                {
                    (value) => {
                        return (<ThemeContext.Consumer>
                            {(theme) => {
                                return (
                                    <div>
                                        <h2 style={theme}>用户昵称: {value.nickname}</h2>
                                        <h2 style={theme}>用户等级: {value.level}</h2>
                                    </div>
                                )
                            }}
                        </ThemeContext.Consumer>)
                    }
                }
            </UserContext.Consumer>

        </div>

    )
}
ProfileHeader.contextType = UserContext;

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
    render () {
        return (
            <div>
                <UserContext.Provider value={{ nickname: "why", level: 99 }}>
                    <ThemeContext.Provider value={{ color: 'red' }}>
                        <Profile />
                    </ThemeContext.Provider>
                </UserContext.Provider>
                <h2>其他内容</h2>
            </div>
        )
    }
}