import React, { Component } from 'react'
import CodeDemo from '../../components/code-demo'
import Audio from '../../components/audio'
import Video from '../../components/video'
import Youtube from '../../components/youtube'

export default class Media extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Media</h2>
                <CodeDemo title='audio' code={ 
                    <Audio
                        style={{ width: '100%'}}
                        src="https://www.w3schools.com/html/horse.ogg"
                    />
                 } />
                <CodeDemo title='video' code={ 
                    <Video 
                        width='100%' 
                        height='auto'
                        src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"
                    />
                } />
                
                <CodeDemo title='Youtube' code={
                    <Youtube
                        videoId={'FoExPq04OQQ'} />
                }/>
            </div>
        )
    }
}