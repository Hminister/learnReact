import React from 'react'
// import connect from './utils/connect'

import { connect } from 'react-redux'

function Home (props) {
    return (
        <div>
            <h1>HOME</h1>
            {/* <h1>当前基数：{props.counter}</h1> */}
            {/* <button onClick={e => props.addCount(1)}>+1</button>
            <button onClick={e => props.addCount(5)}>+5</button> */}
            {
                props.banners.map(item => <li key={item.acm}> <img src={item.image} /></li>)
            }
            {
                props.recommends.map(item => <li key={item.acm}> <img src={item.image} /></li>)
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    banners: state.banners,
    recommends: state.recommends
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)