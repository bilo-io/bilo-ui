import React, { Component } from 'react';

export const If = (props) => {
    return (
        props.isTrue
            ? props.children
            : null
    )
}

export default If;