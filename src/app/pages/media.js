import React, { Component } from 'react'
import CodeDemo from '../../../components/code-demo'

export default class Media extends Component {
    render() {
        const audio = <audio controls>
            <source src="https://www.w3schools.com/html/horse.ogg" />
        </audio>
        const video = <video 
            width='320' 
            height='240' controls>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
        </video>
        return (
            <div className='ws-card'>
                <h2>Media</h2>
                <div>
                    <div>audio</div>
                    <CodeDemo code={ audio } />
                </div>

                <div>
                    <div>video</div>
                    <CodeDemo code={ video } />
                </div>
            </div>
        )
    }
}