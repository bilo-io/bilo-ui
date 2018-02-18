import React, {Component} from 'react'

import Button from '../../components/button'
import Icon from '../../components/icon'
import If from '../../components/if'

export default class Collapsible extends Component {
    state = {
        isOpen: false
    }
    render() {
        const {label, children} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <Button className='rounded hollow secondary' onClick={this.toggle}>
                    <Icon
                        name={isOpen
                            ? 'chevron-up'
                            : 'chevron-down'}/>
                </Button>
                <label>{label}</label>
                <If isTrue={isOpen}>
                    {children}
                </If>
            </div>
        )
    }
    toggle = () => {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }
}