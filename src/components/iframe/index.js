import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export class Iframe extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        onLoad: PropTypes.func
    }

    componentDidMount() {
        let iframe = ReactDOM.findDOMNode(this.refs.iframe)
        iframe.addEventListener('load', this.props.onLoad);
    }

    render() {
        return <div className='iframe-container'>
                <iframe
                    {...this.props}
                    ref='iframe'
                    frameBorder={'0'}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
    }
}

export default Iframe
