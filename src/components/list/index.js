import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../icon'
import './style.scss'

export const propTypesList = {
    items: PropTypes.array,
    onClick: PropTypes.func,
    multiple: PropTypes.bool,
    hasIcons: PropTypes.bool,
    scroll: PropTypes.bool
}
export class List extends Component {
    static propTypes = {
        ...propTypesList
    }
    onClick = (index, item) => () => {
        const { multiple, onClick, onChange } = this.props
        if (multiple) {
            onChange(index, {
                ...item,
                isOn: !item.isOn
            })
        } else {
            onClick(index, item)
        }
    }
    onChange = (index, item) => (e) => {
        e.preventDefaults()
        this.props.onChange(index, {
            ...item,
            isOn: !item.isOn
        })
    }
    render() {
        const {
            items,
            onClick,
            multiple,
            hasIcons,
            scroll
        } = this.props
        return (
            <div className={`list-container ${scroll ? 'scroll':''}`}>
                {
                    (items || []).map((item, i) =>
                        <div key={`list-item-${i}`}
                            className={`item`}
                            onClick={this.onClick(i, item)}
                            onChange={this.onChange(i, item)}>
                            {
                                multiple
                                    ? <input
                                        className='checkbox'
                                        type='checkbox'
                                        checked={item.isOn}
                                        value={item.isOn}
                                        onChange={this.onChange(i, item)}
                                    />
                                    : null
                            }
                            {
                                hasIcons && item.icon 
                                    ? <Icon className='icon' name={item.icon.name} />
                                    : null
                            }
                            <span className={`${item.isOn ? 'active' : ''}`}>{item && item.label}</span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default List