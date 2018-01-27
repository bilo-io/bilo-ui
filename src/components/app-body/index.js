import React from 'react'
import './style.scss'

export const AppBody = (props) => {
    return (
        <div 
            className={`app-body ${props.className || ''}`}
            style={props.style || {}}>
            {props.children}
        </div>
    )
}

export default AppBody;