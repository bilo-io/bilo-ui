import React, { Component }  from 'react'
import PropTypes from 'prop-types'

export const propTypesTime = {
}
export default class Time extends Component {
    static propTypes = {
        ...propTypesTime
    }
    render() {
        return (
            <div>
                {DateTime.now()}
            </div>
        )
    }
}