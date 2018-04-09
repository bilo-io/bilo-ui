import React, { Component } from 'react';

export class Video extends Component {
    render() {
        const { src, width, height, type } = this.props
        return (
            <video 
                width={ width }
                height={ height } controls>
                <source
                    src={src}
                    type={type} />
            </video>
        )
    }
}

export default Video