import React from 'react';
require('./style.scss');

export const AppSidenav = (props) => {
    return props.isOpen
        ? (
            <div
                className={`sidenav 
                    ${props.className || ''} 
                    ${props.isOpen ? 'open' : ''}`}
                style={props.style || {}}>
                {props.children}
            </div>
        )
        : null;
}

export default AppSidenav;