
import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class tabContrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    itemClick (index) {
        this.setState({
            currentIndex: index
        })
        this.props.itemClick(index)
    }
    render () {
        const { list } = this.props
        const { currentIndex } = this.state
        console.log(list)
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (<p className={[currentIndex === index ? 'active' : '']} key={item} onClick={e => this.itemClick(index)}> {item}</p>)
                    })
                }
            </div >
        )
    }
}


tabContrl.propTypes = {
    list: PropTypes.array
}