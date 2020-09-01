import React, { PureComponent } from 'react'

function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (wrapComponent) {
        return class extends PureComponent {
            render () {
                return <wrapComponent></wrapComponent>
            }
        }
    }
}