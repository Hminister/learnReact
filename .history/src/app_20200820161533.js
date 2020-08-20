import React, { Component } from 'react'

import TabContrl from './tab-contrl'
/**
 * 父传子
 * @param {*} props
 */
// //子组件是function类型的传值 
// function Tip (props) {
//     const { name, age } = props
//     return `${name}已经${age}岁了`
// }


// //子组件是class类型的传值
// class Content extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render () {
//         const { name, age } = this.props
//         return `${name}已经${age}岁了`
//     }
// }

// export default class App extends Component {
//     render () {
//         return (<h1>
//             <Content></Content>
//             <Tip name={'morgan'} age={18}></Tip>
//         </h1>)
//     }
// }

// Tip.proptypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
// }

// Content.defaultProps = {
//     name: "王小波",
//     age: 40,
// }

/**
 *
 * @param {*} props
 * 字组件改变父组件
 */

// function CounterButton (props) {
//     const { operator, btnClick } = props;
//     return <button onClick={btnClick}>{operator}</button>
// }

// export default class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             counter: 0
//         }
//     }

//     changeCounter (count) {
//         this.setState({
//             counter: this.state.counter + count
//         })
//     }

//     render () {
//         return (
//             <div>
//                 <h2>当前计数: {this.state.counter}</h2>
//                 <CounterButton operator="+1" btnClick={e => this.changeCounter(1)} />
//                 <CounterButton operator="-1" btnClick={e => this.changeCounter(-1)} />
//             </div>
//         )
//     }
// }

export default class App extends Component {
    constructor(props) {
        super(props)
        this.list = ['流行', '新款', '精选']
        this.state = {
            currentList: '流行'
        }
    }

    render () {
        const { currentList } = this.state

        return (
            <div>
                <TabContrl list={this.list} chooseItem={e => this.changeItem()}></TabContrl>
                <h1>{currentList}</h1>
            </div>
        )
    }
}