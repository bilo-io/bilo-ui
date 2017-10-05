import React from 'react'
import './style.scss'

export const AppTopBar = (props) => {
    return (
        <div className='app-top-bar'>
            {props.children}
        </div>
    )
}

export default AppTopBar;