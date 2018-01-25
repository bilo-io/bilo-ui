import React from 'react';
import '../../bilo-ui.scss';

export const Button = (props) => {
    const { className, style, onClick } = props
    
    return (
        <span 
            className={`button ${className ? className : ''}`}
            onClick={onClick}>
            {props.children}
        </span>
    );
};

export default Button;