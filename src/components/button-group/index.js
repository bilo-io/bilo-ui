import React, { Component } from 'react';
import './style.scss'

export const ButtonGroup = (props) => {
    const {alignment, className, style} = props
    return (
        <div
            className={`button-group ${alignment} ${className || ''}`}
            style={style || {}}>
            {props.children}
        </div>
    )
}

export default ButtonGroup;