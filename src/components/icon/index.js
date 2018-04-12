import React from 'react';
import PropTypes from 'prop-types'

export const propTypesIcon = {
    animation: PropTypes.string,
    animEvent: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    style: PropTypes.object,
    transform: PropTypes.string,
}
export class Icon extends React.Component {
    static propTypes = {
        ...propTypesIcon
    }
    render() {
        const {
            animation,
            animEvent,
            className,
            color,
            name,
            onClick,
            size,
            style,
            transform,
        } = this.props;
            
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
                }
            />
        )
    }
}

export default Icon;