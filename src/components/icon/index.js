import React from 'react'

export const Icon = (props) => {
    return (
        <span>
            <i class={`fa ${props.name}`} />
        </span>
    )
}