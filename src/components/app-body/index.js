import React from 'react'
import './style.scss'

export const AppBody = (props) => {
    return (
        <div className='app-body'>
            {props.children}
        </div>
    )
}

export default AppBody;