import React, { Component, PureComponent } from 'react';


//利用高阶组件增强组件props



class Header extends PureComponent {
    render () {
        const { name, age, height } = this.props;
        return <h2>Header {name + age + height}</h2>
    }
}

export default class App extends PureComponent {
    render () {
        return (
            <div>
                <EnhanceHeader name="aaa" age={18} />
            </div>
        )
    }
}

function enhanceProps (WrapperCpn, otherProps) {
    return props => <WrapperCpn {...props} {...otherProps} />
}

const EnhanceHeader = enhanceProps(Header, { height: 1.88 })