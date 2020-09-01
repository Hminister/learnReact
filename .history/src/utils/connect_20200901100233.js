import React, { PureComponent } from 'react'
import { StoreContext } from './context';

export default function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (WrapComponent) {
        class connectCop extends PureComponent {
            constructor(props) {
                super(props)
                this.state = { counter: this.context.counter }
            }
            componentDidMount () {
                store.subscribe(() => {
                    this.setState({
                        counter: this.context.counter
                    })
                })
            }
            render () {
                return <WrapComponent {...this.props} {...mapStateToProps(this.context)} {...mapDispatchToProps(this.context..dispatch)} />
            }
        }
        connectCop.contextType = StoreContext
        return connectCop
    }
}