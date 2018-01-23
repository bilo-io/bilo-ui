import React from 'react'

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
                className={ className }
                min={ min ? min : undefined }
                max={ max ? max : undefined }
                defaultValue={ defaultValue }
                onChange={ onChange } />
        </div>
    )
}