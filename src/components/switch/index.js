import React, {Component} from 'react';
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
        const {isRound, isChecked, onChange} = this.props
        const defaultOnChange = onChange
            ? onChange
            : (e) => console.log('switch not handling ', e.target.value)
        return (
            <label className='switch'>
                <input type='checkbox' checked={isChecked || true} onChange={defaultOnChange}/>
                <div
                    className='slider'
                    className={isRound
                    ? 'round'
                    : ''}></div>
            </label>
        )
    }
}

export default Switch