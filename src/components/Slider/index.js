import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const Slider = (props) => {
    const { min, max, step, defaultValue, onChange, className, style } = props
    Slider.propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        defaultValue: PropTypes.number,
        onChange: PropTypes.func,
        className: PropTypes.object,
        style: PropTypes.object
    }
    return (
        <input
            type='range'
            style={ style }
            className={ className }
            min={ min }
            max={ max }
            step={ step }
            defaultValue={ defaultValue }
            onChange={ onChange }/>
    )
}

export default Slider
