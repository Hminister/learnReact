import React, { Component } from 'react';


//利用高阶组件增强组件props

function enhanceProps (WrapperCpn, otherProps) {
    return props => <WrapperCpn {...props} {...otherProps} />
}

const EnhanceHeader = enhanceProps(Header, { height: 1.88 })

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