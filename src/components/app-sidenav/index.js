import React, { Component } from 'react';
require('./style.scss');

export const AppSidenav = (props) => {
    const { children, style, className, isOpen, fromRight } = props
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

export default AppSidenav;