import React, {Component} from 'react';
import PropTypes from 'prop-types'

export const propTypesAudio = {
    src: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    type: PropTypes.string
}
export class Audio extends Component {
    static propTypes = {
        ...propTypesAudio
    }
    render() {
        const {src, style, width, height, type} = this.props
        return (
            <audio controls width={width} height={height} style={style}>
                <source src={src}/>
            </audio>
        )
    }
}

export default Audio