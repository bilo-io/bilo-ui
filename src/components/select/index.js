import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '../list'
import './style'
export const propTypesSelect = {
    multiple: PropTypes.bool
}
export class Select extends Component {
    static propTypes = {
        ...propTypesSelect
    }
    render() {
        const { multiple } = this.props
        return (
            <div>
                
            </div>
        )
    }
}

export default Select