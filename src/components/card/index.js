import React from 'react'
import './style.scss'

export const Card = (props) => {
    const { children, className, style, depth} = props
    return (
        <div style={style} className={`card card-${depth || '1'} ${className}`}>
            {children}
        </div>
    )
}

export default Card