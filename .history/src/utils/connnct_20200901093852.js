import React, { PureComponent } from 'react'

function connect () {
    return function conponentHOC () {
        return class extends PureComponent {

        }
    }
}