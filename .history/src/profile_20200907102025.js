import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from './server/request'
import {
    getHomeMultidataAction
} from './store/home/actionCreators'
import { addAction } from './store/profile/actionCreators'
class Profile extends PureComponent {
    componentDidMount () {
        this.props.getHomeMultidata()
    }
    render () {
        return (
            <div>
                <h1>Profile</h1>
                <h1>当前基数：{this.props.counter}</h1>
                <button onClick={e => this.props.addCount(-1)}>-1</button>
                <button onClick={e => this.props.addCount(-5)}>-5</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => {
    return {
        addCount (number) {
            dispatch(addAction(number))
        },
        getHomeMultidata () {
            dispatch(getHomeMultidataAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
