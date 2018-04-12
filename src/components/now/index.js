import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss';

export const propTypesNow = {
    date: PropTypes.object
}
export default class Now extends Component {
    static propTypes = {
        ...propTypesNow
    }
    render() {
        const { date } = this.props
        return (
            <div className='time-now'>
                {/* {this.getFullDate()} */}
                {date}
            </div>
        )
    }
    getFullDate() {
        const now = Date.now //|| new Date().getTime()
        const time = {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        }
        console.log({time})
        return time
    }
}