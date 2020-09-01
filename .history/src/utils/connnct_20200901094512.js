import React, { PureComponent } from 'react'
import store from '../store/index'

export default function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (wrapComponent) {
        return class extends PureComponent {
            constructor(props) {
                super(props)
                this.state = { counter: store.getState().counter }
            }
            componentDidMount () {
                store.subscribe(() => {
                    this.setState({
                        counter: store.getState().counter
                    })
                })
            }
            render () {
                return <wrapComponent />
            }
        }
    }
}