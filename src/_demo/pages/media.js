import React, { Component } from 'react'
import {
    Audio,
    CodeDocs,
    Video,
    Youtube,
    PropTypeDocs,
    propTypesAudio,
    propTypesVideo,
    propTypesYoutube
} from '../../'

import docs from '../../util/proptypes'

export default class Media extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Media</h2>
                <PropTypeDocs
                    docs={docs.Audio}
                    propTypes={propTypesAudio}
                />
                <CodeDocs title='audio' code={
                    <Audio
                        style={{ width: '100%'}}
                        src="https://www.w3schools.com/html/horse.ogg"
                    />
                } />
                <PropTypeDocs
                    docs={docs.Video}
                    propTypes={propTypesVideo}
                />
                <CodeDocs title='video' code={
                    <Video
                        width='100%'
                        height='auto'
                        src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"
                    />
                } />
                <PropTypeDocs
                    docs={docs.Youtube}
                    propTypes={propTypesYoutube}
                />
                <CodeDocs title='Youtube' code={
                    <Youtube
                        videoId={'FoExPq04OQQ'} />
                }/>
            </div>
        )
    }
}