import React, { Component } from 'react'
import { Icon, If } from '../../components'
import './style.scss'

export class Badges extends Component {
    onClose = (i, item) => () => {
        this.props.onClose(i, {
            ...item,
            isOn: false
        })
    }
    render() {
        const {
            hint,
            items,
            onChange,
            onClose
        } = this.props
        return (
            <div className='badges'>
                {
                    items.length
                        ? items.map((item, i) =>
                        <If key={`badge-${i}`} isTrue={item.isOn}>
                            <span
                                className='badge'>
                                {item.label}
                                <span className='close'
                                onClick={this.onClose(i, item)}>
                                <Icon name='times' />
                            </span>
                            </span>
                        </If>)
                        : <span>{hint}</span>
                }
            </div>
        )
    }
}

export default Badges