import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesInput = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object
}

export class Input extends Component {
    static propTypes = {
        ...propTypesInput
    }
    render() {
        const {
            className,
            defaultValue,
            label,
            max,
            min,
            onChange,
            placeholder,
            type,
            style,
        } = this.props

        return (
            <div>
                <label>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    style={style}
                    className={`input ${className}`}
                    min={min
                        ? min
                        : undefined}
                    max={max
                        ? max
                        : undefined}
                    defaultValue={defaultValue}
                    onChange={onChange}/>
            </div>
        )
    }
}

export default Input