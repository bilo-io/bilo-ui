import React from 'react'

export const Icon = (props) => {
    return (
        <span>
            <i class={`fa fa-${props.name}`} />
        </span>
    )
}