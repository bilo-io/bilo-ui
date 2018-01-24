import React, { Component } from 'react'
import {Button, Icon, Loader, LoaderType} from '../../components'
import CodeDemo from '../../components/code-demo'

export default class Icons extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Icons</h2>
                <CodeDemo title='Plain Icons' code={ 
                    <div>
                        <h4>Social Media</h4>
                        <Icon name={'google'} style={{ padding: '1em' }} />
                        <Icon name={'facebook-official'} style={{ padding: '1em' }} />
                        <Icon name={'twitter'} style={{ padding: '1em' }} />
                        <Icon name={'linkedin'} style={{ padding: '1em' }} />
                        
                        <h4>Arrows</h4>
                        <Icon name={'arrow-left'} style={{ padding: '1em' }} />
                        <Icon name={'arrow-down'} style={{ padding: '1em' }} />
                        <Icon name={'arrow-right'} style={{ padding: '1em' }} />
                        <Icon name={'arrow-up'} style={{ padding: '1em' }} />

                        <h4>User Interface</h4>
                        <Icon name={'bars'} style={{ padding: '1em' }} />
                        <Icon name={'envelope'} style={{ padding: '1em' }} />
                        <Icon name={'heart'} style={{ padding: '1em' }} />
                        <Icon name={'heart-o'} style={{ padding: '1em' }} />
                        
                        <h4>Rotation</h4>
                        <Icon name={'bars'} style={{ padding: '1em' }}/>
                        <Icon name={'bars'} transform={'rotate-90'} style={{ padding: '1em' }}/>
                        <Icon name={'bars'} transform={'rotate-180'} style={{ padding: '1em' }}/>
                        <Icon name={'bars'} transform={'rotate-270'} style={{ padding: '1em' }}/>
                    </div>
                 } />
            </div>
        )
    }
}