import React from 'react'

export default class Video extends React.Component {
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