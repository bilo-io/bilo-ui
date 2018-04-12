import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const propTypesYoutube = {
    width: PropTypes.string,
    height: PropTypes.string,
    videoId: PropTypes.string,
    autoPlay: PropTypes.bool
}
export default class Youtube extends Component {
    static propTypes = {
        ...propTypesYoutube
    }
    render() {
        const {width, height, videoId, autoPlay} = this.props

        return <iframe
            style={{
            border: '0px'
        }}
            width={width
            ? width
            : '100%'}
            height={height
            ? height
            : 'auto'}
            src={`https://www.youtube.com/embed/${videoId}${autoPlay
            ? '?autoplay=1'
            : ''}`}></iframe>
    }
}
