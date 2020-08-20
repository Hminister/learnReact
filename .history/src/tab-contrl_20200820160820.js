
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
        const { currentIndex } = this.state
        console.log(list)
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (<p className={{ 'active': currentIndex === index } key={item}}> { item }</p>)
    })
}
            </div >
        )
    }
}
tabContrl.propTypes = {
    list: PropTypes.array
}