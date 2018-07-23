import React, { Component } from 'react'
import {
    Audio,
    CodeDocs,
    SoundCloud,
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
                <CodeDocs
                    title='audio'
                    propDocs={propTypesAudio}
                    propTypes={docs.Audio}
                    code={
                    <Audio
                        style={{ width: '100%'}}
                        src="https://www.w3schools.com/html/horse.ogg"
                    />
                } />
                <CodeDocs title='SoundCloud' code={
                    <div>
                        <SoundCloud trackId={392809137} />
                        <SoundCloud trackId={474841506} />
                        <SoundCloud trackId={474841507} />
                    </div>
                }/>
                {/* <CodeDocs
                    title='Soundcloud'
                    // propDocs={docs.Soundcloud}
                    // propTypes={propTypesSoundcloud}
                    code={
                    <Soundcloud
                        isCustomPlayer
                        url='https://soundcloud.com/user493736/tracks'
                        clientId='idiykIpBJvGcwHGMw9L8ApZ9uYDEq2J4'
                        onReady={() => console.log('track is loaded!')}
                    />
                }/> */}
                <CodeDocs
                    title='video'
                    propDocs={propTypesVideo}
                    propTypes={docs.Video}
                    code={
                    <Video
                        width='100%'
                        height='auto'
                        src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"
                    />
                } />
                <CodeDocs
                    title='Youtube'
                    propDocs={docs.Youtube}
                    propTypes={propTypesYoutube}
                    code={
                        <div>
                            <Youtube videoId={'FoExPq04OQQ'} />
                            <Youtube videoId={'MiwYS8E_m14'} />
                            <Youtube videoId={'y2dUIeo7POg'} />
                            <Youtube videoId={'0YyBoKyNsnI'} />
                        </div>
                }/>
            </div>
        )
    }
}