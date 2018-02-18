import React, { Component }  from 'react'
import './style.scss';

export default class Now extends Component {
    render() {
        return (
            <div className='time-now'>
                {/* {this.getFullDate()} */}
                {Date.now()}
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