import React, { Component }  from 'react'
import Now from '../../components/now'

export default class Time extends Component {
    render() {
        return (
            <div>
                {/* <Now date={Date.now().toLocaleTimeString()}/> */}
                {/* <Now date={Date.now().toLocaleTimeString()}format='HH:mm'/> */}
                {/* <Now date={Date.now().toLocaleTimeString()}format='HH:mm:ss' /> */}
            </div>
        )
    }
}