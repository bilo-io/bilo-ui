import React, { Component } from 'react'
import { Icon, If, List } from '../'
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
                        <If isTrue={item.isOn} key={`badge-${i}`}>
                            <span
                                className='badge'>
                                {item.label}
                                <span className='close'
                                    onClick={this.onClose(i,item)}><Icon name='times' /></span>
                            </span>
                        </If>
                    )
                }
            </div>
        )
    }
}