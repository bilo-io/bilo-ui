import React, { Component } from 'react';
import './style.scss'

export const AppTopBar = (props) => {
    return (
        <div 
            className={`app-top-bar ${props.className || ''}`}
            style={props.style || {}}>
            {props.children}
        </div>
    )
}

export default AppTopBar;