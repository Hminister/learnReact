import React, { Component } from 'react'

import PropTypes from 'prop-types'
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
class tabContrl extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const { list } = this.props
        return (
            <ul>
                {
                    list.map((item, index) => <li>{item}</li>)
                }
            </ul>
        )
    }
}
tabContrl.propTypes = {
    list: PropTypes.array
}
export default class App extends Component {
    constructor() {
        this.state = {
            list: ['流行', '新款', '精选']
        }
    }

    render () {
        const { list } = this.state
        return (
            <tabContrl list={list}></tabContrl>
        )
    }
}