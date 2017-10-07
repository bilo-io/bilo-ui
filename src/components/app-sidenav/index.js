import React from 'react';
require('./style.scss');

export const AppSidenav = (props) => {
    return props.isOpen
        ? (
            <div
                className={'sidenav ' + props.isOpen
                ? 'open'
                : ''}>
                {props.children}
            </div>
        )
        : null;
}

export default AppSidenav;