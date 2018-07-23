import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const propTypesYoutube = {
    width: PropTypes.string,
    height: PropTypes.string,
    videoId: PropTypes.string,
    autoPlay: PropTypes.bool
}
export class Youtube extends Component {
    static propTypes = {
        ...propTypesYoutube
    }
    render() {
        const {width, height, videoId, autoPlay, style} = this.props

        return <iframe
            style={{
                border: '0px',
                ...style
            }}
            width={width
                ? width
                : 640}
            height={height
                ? height
                : 400}
            src={`https://www.youtube.com/embed/${videoId}${autoPlay
                ? '?autoplay=1'
                : ''}`}></iframe>
    }
}

export default Youtube