import React, { PureComponent } from 'react'
import { StoreContext } from './context';

export default function connect (mapStateToProps, mapDispatchToProps) {
    return function conponentHOC (WrapComponent) {
        class connect extends PureComponent {
            constructor(props) {
                super(props)
                this.state = { counter: store.getState().counter }
            }
            componentDidMount () {
                store.subscribe(() => {
                    this.setState({
                        counter: store.getState().counter
                    })
                })
            }
            render () {
                return <WrapComponent {...this.props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />
            }
        }

        return
    }
}