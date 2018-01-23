import React from 'react'

export default class Audio extends React.Component {
    render() {
        const { src, style, width, height, type } = this.props
        return (
            <audio controls width={ width } style={ style } >
                <source src={ src } />
            </audio>
        )
    }
}