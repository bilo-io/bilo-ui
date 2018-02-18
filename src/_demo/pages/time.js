import React, { Component }  from 'react'
import Now from '../../components/now'

export default class Time extends Component {
    render() {
        return (
            <div>
                <Now />
                <Now format='HH:mm'/>
                <Now format='HH:mm:ss' />
            </div>
        )
    }
}