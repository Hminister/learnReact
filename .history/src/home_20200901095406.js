import React from 'react'
import connect from './utils/connect'
import { addAction } from './store/actionCreators'

function Home (props) {
    return (
        <div>
            <h1>HOME</h1>
            <h1>当前基数：{props.counter}</h1>
            <button onClick={e => props.addCount(1)}>+1</button>
            <button onClick={e => props.addCount(5)}>+5</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
    return {
        addCount (number) {
            dispatch(addAction(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)