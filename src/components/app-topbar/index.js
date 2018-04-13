import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesAppTopBar = {
    style: PropTypes.object,
    className: PropTypes.string,
}
export class AppTopBar extends Component {
    static propTypes = {
        ...propTypesAppTopBar
    }
    render() {
        const { children, className, style} = this.props
        return (
            <div
                className={`app-top-bar ${className || ''}`}
                style={style || {}}
            >
                {children}
            </div>
        )
    }
}

export default AppTopBar;