import React from 'react'

export const Icon = (props) => {
    return (
        <span style={props.style} className={props.className}>
            <i
                className={`fa fa-${props.name} 
                ${props.size ? `fa-${props.size}`: ''}
                ${props.transform ? `fa-${props.transfporm}`: ''}`}/>
        </span>
    )
}

export default Icon;