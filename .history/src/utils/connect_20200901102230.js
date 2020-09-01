import React, { PureComponent } from 'react'
import { StoreContext } from './context';

export default function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (WrapComponent) {
        class connectCop extends PureComponent {
            constructor(props, context) {
                super(props)
                this.state = { counter: context.getState().counter }
            }
            componentDidMount () {
                this.unsubscribe = store.subscribe(() => {
                    this.setState({
                        counter: this.context.getState().counter
                    })
                })
            }
            componentWillUnmount () {
                this.
            }
            render () {
                return <WrapComponent {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispatchToProps(this.context.dispatch)} />
            }
        }
        connectCop.contextType = StoreContext
        return connectCop
    }
}