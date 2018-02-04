import React from 'react';
import '../../bilo-ui.scss';

export const Button = (props) => {
    const { className, style, onClick } = props
    
    return (
        <button 
            className={`button ${className ? className : ''}`}
            onClick={onClick}>
            {props.children}
        </button>
    );
};

export default Button;