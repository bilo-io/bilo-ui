import React, { Component } from 'react';

export class Audio extends Component {
    render() {
        const { src, style, width, height, type } = this.props
        return (
            <audio controls width={ width } style={ style } >
                <source src={ src } />
            </audio>
        )
    }
}

export default Audio