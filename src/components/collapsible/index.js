import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button'
import Icon from '../../components/icon'
import If from '../../components/if'

export const propTypesCollapsible = {
    label: PropTypes.string
}
export default class Collapsible extends Component {
    static propTypes = {
        ...propTypesCollapsible
    }
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