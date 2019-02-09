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
    static defaultProps = {
        faStyle: 'solid'
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
            faStyle,
        } = this.props;

        const customStyle = {
            ...style,
            color
        }
        return (
            <span onClick={onClick}>
                <i
                    style={customStyle}
                    className={
                        `${className
                            ? className
                            : ''} ${faStyle === 'solid' ? 'fas': 'far'} fa-${name} ` +
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
            </span>
        )
    }
}

export default Icon;