import React from 'react'
import connect from './utils/connnct'
import { addAction } from './store/actionCreators'

function Home () {
    return (
        <div>
            <h1>HOME</h1>
            <h1>当前基数：{this.props.counter}</h1>
            <button onClick={e => this.props.addCount(1)}>+1</button>
            <button onClick={e => this.props.addCount(5)}>+5</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
    function addCount () {
        dispatch(addAction)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)