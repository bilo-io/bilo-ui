import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Icon, If} from '../../components'
import './style.scss'
export const propTypesBadges = {
    closeable: PropTypes.bool,
    hint: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func,
    onClose: PropTypes.func
}
export class Badges extends Component {
    static propTypes = {
        ...propTypesBadges
    }
    onClose = (i, item) => () => {
        this
            .props
            .onClose(i, {
                ...item,
                isOn: false
            })
    }
    render() {
        const {hint, items, onChange, onClose, closeable} = this.props
        return (
            <div className='badges'>
                {items.length
                    ? items.map((item, i) => <If key={`badge-${i}`} isTrue={item.isOn}>
                        <span className='badge'>
                            {item.label}
                            <span className='close' onClick={this.onClose(i, item)}>
                                <Icon name='times'/>
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