import React, { Component } from 'react';
import PropTypes from 'prop-types'

export const MultiSlider = (props) => {
    const { min, max, step, defaultRange, onChange, className, style } = props
    MultiSlider.propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        defaultRange: PropTypes.array,
        defaultValue: PropTypes.number,
        onChange: PropTypes.func,
        className: PropTypes.object,
        style: PropTypes.object
    }
    return (
        <div style={{
            position: 'relative'
        }}>
            <input
                type='range'
                style={{ ...style, position: 'absolute', zIndex: '1' }}
                className={ className }
                min={ min }
                max={ max }
                step={ step }
                defaultValue={ defaultRange[0] || min }
                onChange={ onChange }/>
            <input
                type='range'
                style={ style }
                style={{ ...style, position: 'absolute', zIndex: '1' }}
                className={ className }
                min={ min }
                max={ max }
                step={ step }
                defaultValue={ defaultRange[1] || max }
                onChange={ onChange }/>
        </div>
    )
}

export default MultiSlider