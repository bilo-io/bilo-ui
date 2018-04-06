import React, { Component } from 'react'
import { Icon, If } from '../../components'
import './style.scss'

export default class Badges extends Component {
    onClose = (i, item) => () => {
        this.props.onClose(i, {
            ...item,
            isOn: false
        })
    }
    render() {
        const { onChange, onClose, items } = this.props
        return (
            <div className='badges'>
                {
                    (items || []).map((item, i) =>
                        <If key={`badge-${i}`} isTrue={item.isOn}>
                            <span
                                className='badge'>
                                {item.label}
                                <span className='close'
                                onClick={this.onClose(i, item)}>
                                <Icon name='times' />
                            </span>
                            </span>
                        </If>
                    )
                }
            </div>
        )
    }
}