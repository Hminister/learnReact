import React, { PureComponent, createContext } from 'react';


//高阶组件实现context共享
const UserContext = createContext({
    nickname: "默认",
    level: -1
})

function withUser (WrapperCpn) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    value => {
                        return <WrapperCpn {...props} {...value} />
                    }
                }
            </UserContext.Consumer>
        )
    }
}

function Header (props) {
    const { nickname, level } = props;
    return <h2>Header {"昵称:" + nickname + "等级:" + level}</h2>
}


function Footer (props) {
    const { nickname, level } = props;
    return <h2>Footer {"昵称:" + nickname + "等级:" + level}</h2>
}

const UserHeader = withUser(Header);
const UserFooter = withUser(Footer);

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <UserContext.Provider value={{ nickname: "why", level: 90 }}>
                    <UserHeader />
                    <UserFooter />
                </UserContext.Provider>
            </div>
        )
    }
}