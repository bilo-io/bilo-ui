import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import '../../bilo-ui.scss'

export const propTypesButton = {
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func
}
export class Button extends Component {
    static propTypes = {
        ...propTypesButton
    }
    render() {
        const {
            children,
            className,
            onClick,
            style
        } = this.props
        return (
            <button
                className={`button ${className
                ? className
                : ''}`}
                onClick={onClick}>
                {children}
            </button>
        );
    }
};

export default Button;