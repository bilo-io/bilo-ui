import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesButtonGroup = {
    alignment: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}
export class ButtonGroup extends Component {
    static propTypes = {
        ...propTypesButtonGroup
    }
    render() {
        const {
            alignment,
            className,
            style
        } = this.props
        return (
            <div
                className={`button-group ${alignment} ${className || ''}`}
                style={style || {}}>
                {props.children}
            </div>
        )
    }
}

export default ButtonGroup;