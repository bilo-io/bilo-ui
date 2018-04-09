import React from 'react';

export const Icon = (props) => {
    const {
        name,
        color,
        className,
        style,
        size,
        transform,
        animation,
        animEvent,
        onClick } = props;
    
    const customStyle = {
        ...style,
        color
    }
    return (
        <i
            style={customStyle}
            onClick={onClick}
            className={
                `${className ? className : ''} fas fa-${name} ` +
                `${size ? `fa-${size} ` : ''}` +
                `${transform ? `fa-${transform} ` : ''}`+
                `${animation ? `fa-${animation} animated${animEvent ? '-' + animEvent : ''}` : ''}`
            } />
    )
}

export default Icon;