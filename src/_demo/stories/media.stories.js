import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components';
import {
    Audio,
    Video,
    Youtube,
} from '../../'

storiesOf('Media', module)
    .add('Audio', () => (
        <Audio
            style={{ width: '100%'}}
            src="https://www.w3schools.com/html/horse.ogg"
        />
    ))
    .add('Video', () => (
        <div>
            <div>This is an explanation</div>
            <Youtube videoId={'FoExPq04OQQ'} />
            <div>
                <Video
                    width='50%'
                    height='auto'
                    src="https://www.w3schools.com/html/movie.mp4" type="video/mp4"
                />
            </div>
        </div>
    ))
    .add('Youtbe', () => (
        <Youtube videoId={'FoExPq04OQQ'} />
    ));