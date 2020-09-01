import React, { PureComponent } from 'react'
import store from '../store/index'

export default function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (wrapComponent) {
        constructor(props) {
            super(props)
            this.state = { counter: store.getState().counter }
        }

        return class extends PureComponent {
            render () {
                return <wrapComponent />
            }
        }
    }
}