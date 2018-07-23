import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const propTypesIf = {
    truthy: PropTypes.bool.isRequired
}
export class If extends Component {
    static propTypes = {
        ...propTypesIf
    }
    render() {
        return (
            this.props.truthy
                ? this.props.children
                : null
        )
    }
}

export default If