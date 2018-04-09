import React, { Component } from 'react';
import './style.scss'

export const Input = (props) => {
    const { 
        type, 
        label, 
        placeholder, 
        min,
        max,
        defaultValue,
        style, 
        className,
        onChange 
    } = props

    return (
        <div>
            <label>{label}</label>
            <input 
                type={ type } 
                placeholder={ placeholder }
                style={ style }
                className={ `input ${className}` }
                min={ min ? min : undefined }
                max={ max ? max : undefined }
                defaultValue={ defaultValue }
                onChange={ onChange } />
        </div>
    )
}

export default Input