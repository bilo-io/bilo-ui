import React from 'react';
import PropTypes from 'prop-types'
const props = {
    name: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.string,
    size: PropTypes.string,
    transform: PropTypes.string,
    animation: PropTypes.string,
    animEvent: PropTypes.string,
    onClick: PropTypes.func
}
export class Icon extends React.Component {
    render() {
        const {
            name,
            color,
            className,
            style,
            size,
            transform,
            animation,
            animEvent,
            onClick
        } = props;
            
            const customStyle = {
                ...style,
                color
            }
            return (
                <i
                style={customStyle}
                onClick={onClick}
                className={
                    `${className
                        ? className
                        : ''} fas fa-${name} ` +
                    `${size
                        ? `fa-${size} `
                        : ''}` +
                    `${transform
                        ? `fa-${transform} `
                        : ''}` +
                    `${animation
                        ? `fa-${animation} animated${animEvent
                            ? '-' + animEvent
                            : ''}`
                        : ''}`
                } />
            )
        }
}

export default Icon;