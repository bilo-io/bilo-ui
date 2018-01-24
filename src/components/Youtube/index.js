import React, { Component } from 'react'

export default class Youtube extends Component {
    render() {
        const { width, height, videoId, autoPlay } = this.props
        
        return <iframe
            style={{ border: '0px' }}    
            width={width ? width : '100%'}
            height={height ? height : 'auto'}
            src={`https://www.youtube.com/embed/${videoId}${autoPlay ? '?autoplay=1' : ''}`}>
        </iframe>
    }
}
