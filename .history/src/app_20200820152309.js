import React, { Component } from 'react'

//子组件是function类型的传值
function Tip (props) {
    const { name, age } = props
    return `${name}已经${age}岁了`
}


//子组件是class类型的传值
class Content extends Component {
    propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        height: PropTypes.number
    }
    constructor(props) {
        super(props)
    }
    render () {
        const { name, age } = this.props
        return `${name}已经${age}岁了`
    }
}

export default class App extends Component {
    render () {
        return (<h1>
            <Content name={'oli'} age={25}></Content>
            <Tip name={'morgan'} age={18}></Tip>
        </h1>)
    }
}

