
import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class tabContrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    render () {
        const { list } = this.props
        console.log(list)
        return (
            <div>
                {
                    list.map((item, index) => { return (<p class={'active':currentIndex===index}>{item}</p>)
    })
}
            </div >
        )
    }
}
tabContrl.propTypes = {
    list: PropTypes.array
}