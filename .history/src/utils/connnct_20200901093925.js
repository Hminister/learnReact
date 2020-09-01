import React, { PureComponent } from 'react'

function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC () {
        return class extends PureComponent {

        }
    }
}