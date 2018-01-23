import React, { Component } from 'react'
import CodeDemo from '../../components/code-demo'
import Audio from '../../components/audio'
import Video from '../../components/video'

export default class Media extends Component {
    render() {
        const audio = <Audio
            style={{ width: '100%'}}
            src="https://www.w3schools.com/html/horse.ogg"
        />
        const video = <Video 
            width='100%' 
            height='auto'
            src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"
        />
        return (
            <div className='ws-card'>
                <h2>Media</h2>
                <CodeDemo title='audio' code={ audio } />
                <CodeDemo title='video' code={ video } />
            </div>
        )
    }
}