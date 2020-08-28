import React, { PureComponent, createContext } from 'react';

const UserContext = createContext({
    nickname: "默认",
    level: -1
})

function Header (props) {
    return (
        <UserContext.Consumer>
            {
                value => {
                    const { nickname, level, height } = value;
                    return <h2>Header {"昵称:" + nickname + "等级" + level}</h2>
                }
            }
        </UserContext.Consumer>
    )
}

function Footer (props) {
    return (
        <UserContext.Consumer>
            {
                value => {
                    const { nickname, level } = value;
                    return <h2>Footer {"昵称:" + nickname + "等级" + level}</h2>
                }
            }
        </UserContext.Consumer>
    )
}


export default class App extends PureComponent {
    render () {
        return (
            <div>
                <UserContext.Provider value={{ nickname: "why", level: 90 }}>
                    <EnhanceHeader />
                    <Header />
                    <Footer />
                </UserContext.Provider>
            </div>
        )
    }
}



function enhanceProps (WrapperCpn, otherProps) {
    return props => <WrapperCpn {...props} {...otherProps} />
}

const EnhanceHeader = enhanceProps(Header, { height: 1.88 })