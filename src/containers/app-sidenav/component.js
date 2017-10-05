import React from 'react';
import {toggleSidenav} from './actions';
require('./style.scss');

export const Sidenav = (props, dispatch, items) => {
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

export default Sidenav;