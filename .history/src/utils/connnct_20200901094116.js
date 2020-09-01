import React, { PureComponent } from 'react'
import store from '../store/index'
export default function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (wrapComponent) {
        return class extends PureComponent {
            render () {
                return <wrapComponent></wrapComponent>
            }
        }
    }
}