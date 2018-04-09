import React, { Component } from 'react';
import './style.scss'

export const Dropdown = (props) => {
    const { options, onChange, label } = props
    return <div>
        <label>{label}</label>
        <select className='dropdown' onChange={onChange}>
            {options.map( (option, i) => (
                <option 
                    key={`[${i}]-${option.value}`} 
                    value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
}

export default Dropdown