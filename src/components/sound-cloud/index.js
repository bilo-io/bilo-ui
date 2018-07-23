import React, { Component } from 'react'
import './style.scss'

export class SoundCloud extends Component {
    static defaultProps = {
        autoPlay: false,
        hideRelated: false,
        showComments: true,
        showUser: true
    }
    render() {
        const {
            trackId,
            autoPlay,
            hideRelated,
            showComments,
            showUser
        } = this.props

        return <div className='sound-cloud'>
            <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=${autoPlay}&hide_related=${hideRelated}&show_comments=${showComments}&show_user=${showUser}&show_reposts=false&show_teaser=true&visual=true`}
        />
        </div>
    }
}

export default SoundCloud