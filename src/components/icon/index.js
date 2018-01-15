import React from 'react'

export const Icon = (props) => {
    const { name, className, style, size, transform, onClick } = props;
    return (
        <i
            style={style}
            onClick={onClick}
            className={`${className ? className : ''} fa fa-${name}
            ${size ? `fa-${size}`: ''}
            ${transform ? `fa-${transform}`: ''}`}/>
    )
}

export default Icon;