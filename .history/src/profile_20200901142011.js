import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    addAction, changeBannersAction,
    changeRecommendsAction
} from './store/actionCreators'

class Profile extends PureComponent {
    componentDidMount () {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
            const data = res.data.data;
            this.props.changeBanners(data.banner.list);
            this.props.changeRecommends(data.recommend.list);
        })
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
        changeBanners (banners) {
            dispatch(changeBannersAction(banners));
        },
        changeRecommends (recommends) {
            dispatch(changeRecommendsAction(recommends));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
