import React, { Component } from 'react'
import { Iframe, If, Loader, LoaderType  } from '../'
import './style.scss'

export class SoundCloud extends Component {
    static defaultProps = {
        autoPlay: false,
        hideRelated: false,
        showComments: true,
        showUser: true
    }

    state = { isLoading: true }

    hideLoader = () => this.setState({isLoading: false})

    render() {
        const {
            trackId,
            autoPlay,
            hideRelated,
            showComments,
            showUser
        } = this.props

        const { isLoading } = this.state

        return <div className='sound-cloud'>
            <Iframe
                onLoad={ this.hideLoader }
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=${autoPlay}&hide_related=${hideRelated}&show_comments=${showComments}&show_user=${showUser}&show_reposts=false&show_teaser=true&visual=true`}
            />
            <If truthy={ isLoading }>
                <Loader type={LoaderType.SPINNER} />
            </If>
        </div>
    }
}

export default SoundCloud