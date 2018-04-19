import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesSlider = {
    className: PropTypes.object,
    defaultValue: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    step: PropTypes.number,
    style: PropTypes.object
}
export class Slider extends Component {
    static propTypes = {
        ...propTypesSlider
    }
    render() {
        const {
            className,
            defaultValue,
            max,
            min,
            onChange,
            step,
            style
        } = this.props
        return (<input
            type='range'
            className={className}
            defaultValue={defaultValue}
            min={min}
            max={max}
            onChange={onChange}
            step={step}
            style={style}
        />)
    }
}

export default Slider
