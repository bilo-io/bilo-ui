import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesDropdown = {
    label: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
}
export class Dropdown extends Component {
    static propTypes = {
        ...propTypesDropdown
    }
    render() {
        const { options, onChange, label } = this.props
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
}

export default Dropdown