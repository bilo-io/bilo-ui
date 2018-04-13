import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesAppBody = {
    className: PropTypes.string,
    style: PropTypes.object
}

export class AppBody extends Component {
    static propTypes = {
        ...propTypesAppBody
    }
    render() {
        const {
            children,
            className,
            style
        } = this.props
        return (
            <div
                className={`app-body ${className || ''}`}
                style={style || {}}>
                {children}
            </div>
        )
    }
}

export default AppBody;