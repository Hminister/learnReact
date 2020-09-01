import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from './server/request'
import {
    addAction,
    changeBannersAction,
    changeRecommendsAction
} from './store/actionCreators'

class Profile extends PureComponent {
    async componentDidMount () {
        const result = await axios.get("https://httpbin.org/get", {
            params: {
                banners: ["banner1", "banner2", "banner3"],
                recommends: ["recommend1", "recommend2", "recommend3"]
            }
        })

        this.props.changeBanners(["banner1", "banner2", "banner3"])
        this.props.changeRecommends(["recommend1", "recommend2", "recommend3"])

        const json = {
            "processFlag": "01",
            "ownerId": 396,
            "type": "apply",
            "name": "快照1",
            "serviceId": 335,
            "details": [
                {
                    "serviceId": 335,
                    "serviceAttr": null,
                    "quantity": 1,
                    "duration": 1,
                    "serviceConfig": "{\"desc\":null,\"serviceId\":335,\"serviceName\":\"快照\",\"serviceComponent\":\"VBS\",\"inputs\":[{\"key\":\"deploy_type\",\"name\":\"部署类型\",\"value\":\"vbs\",\"hide\":true}],\"configs\":{\"name\":\"虚拟机快照测试4\",\"cloudEnvId\":\"1633\",\"resType\":\"RES-VM\",\"resVmId\":\"ca54a5efc08741d7a0c45f02ac124dba\",\"description\":null}}"
                }
            ]
        }

        console.log(JSON.parse(json))
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
