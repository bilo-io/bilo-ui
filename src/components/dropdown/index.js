import React from 'react'
import './style.scss'

export const Dropdown = (props) => {
    const { options, onChange } = props
    return <div>
        <select onChange={onChange}>
            {options.map( (option, i) => (
                <option 
                    key={`[${i}]-${option.value}`} 
                    value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
}

export default Dropdown