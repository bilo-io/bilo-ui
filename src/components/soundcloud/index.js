import React, { Component } from 'react'
import {PlayButton, Timer} from 'react-soundplayer/components';
import {withSoundCloudAudio} from 'react-soundplayer/addons';

export const resolveUrl = (url, clientId) => {
    return fetch(`http://api.soundcloud.com/resolve.json?url=${url}&client_id=${clientId}`)
}
export class Soundcloud extends Component {
    handleResolveResponse = data => {
        console.log(data)
        const dataType = data.length ? data[0].kind : data.kind
        this.setState({
            [dataType]: data
        }, () => console.log(this.state))
    }
    componentDidMount () {
        const { isCustomPlayer, streamUrl, url, tracks, clientId} = this.props
        if(isCustomPlayer) {
            console.log('custom player:', {streamUrl, resolveUrl})
            resolveUrl(url, clientId)
                .then(response => {
                    console.log({response})
                    fetch(response.url)
                        .then(res => res.json().then( this.handleResolveResponse))
                        .catch(error => console.log({error}))
                })
                .catch(error => console.log('customError: ', error))
        }
    }
    render() {
        const {
            isCustomPlayer,
            clientId,
            audioId,
            url,
            track,
            currentTime
        } = this.props
        // const
        return <div>
            {isCustomPlayer
                ? <div></div>
                : <div className='custom-player'>
                    <PlayButton
                        className='custom-player-btn'
                        onPlayClick={() => {
                        console.log('play button clicked!');
                    }}
                        {...this.props}/>
                    <h2 className='custom-player-title'>
                        {track
                            ? track.title
                            : 'Loading...'}
                    </h2>
                    <Timer
                        className='custom-player-timer'
                        duration={track
                        ? track.duration / 1000
                        : 0}
                        currentTime={currentTime}
                        clientId={clientId}
                        resolveUrl={url}
                        {...this.props}/>
                </div>
            }
        </div>
    }
}

export default withSoundCloudAudio(Soundcloud)