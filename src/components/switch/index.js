import React, {Component} from 'react';
import {If} from '../'
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesSwitch = {
    isRound: PropTypes.bool,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func
}
export class Switch extends Component {
    static propTypes = {
        ...propTypesSwitch
    }
    render() {
        const {isRound, isChecked, onChange, title} = this.props
        const defaultOnChange = onChange
            ? onChange
            : (e) => console.log('switch not handling ', e.target.value)
        return (
            <div className='switch-container'>
                <span className='switch-title'>{title}</span>
                <label className='switch'>
                    <input
                        type='checkbox'
                        className='checkbox'
                        checked={isChecked}
                        onChange={onChange}
                    />
                    <div
                        className={`slider ${isRound
                        ? 'round'
                        : ''}`}></div>
                </label>
            </div>    
        )
    }
}

export default Switch