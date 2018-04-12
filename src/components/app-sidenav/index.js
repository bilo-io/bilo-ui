import React, { Component } from 'react';
import PropTypes from 'prop-types'
require('./style.scss');

export const propTypesAppSidenav = {
    style: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    fromRight: PropTypes.bool,
}
export class AppSidenav extends Component {
    static propTypes = {
        ...propTypesAppSidenav
    }
    render() {
        const { children, style, className, isOpen, fromRight } = this.props
        return isOpen
        ? (
            <div
            className={`sidenav 
            ${className || ''} 
            ${isOpen ? 'open' : ''}
            ${fromRight ? 'right' : 'left'}`}
            style={style || {}}>
                {children}
            </div>
        )
        : null;
    }
}

export default AppSidenav;