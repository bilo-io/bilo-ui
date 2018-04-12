import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesCard = {
    className: PropTypes.string,
    depth: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
}
export class Card extends Component {
    static propTypes = {
        ...propTypesCard
    }
    render() {
        const {
            children,
            className,
            depth,
            onClick,
            style
        } = this.props
        return (
            <div
                style={style}
                onClick={onClick}
                className={`card card-${depth || '1'} ${className || ''}`}>
                {children}
            </div>
        )
    }
}

export default Card