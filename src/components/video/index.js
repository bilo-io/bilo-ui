import React, {Component} from 'react';
import PropTypes from 'prop-types'

export const propTypesVideo = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    type: PropTypes.string
}
export class Video extends Component {
    static propTypes = {
        ...propTypesVideo
    }
    render() {
        const {
            src,
            width,
            height,
            type,
            style,
            className
        } = this.props
        return (
            <video width={width} height={height} controls>
                <source src={src} type={type}/>
            </video>
        )
    }
}

export default Video