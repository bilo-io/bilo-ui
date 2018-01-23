import React, { Component } from 'react'
import {Button, Icon, Loader, LoaderType} from 'bilo-ui';
import CodeDemo from '../../../components/code-demo'

export default class Icons extends Component {
    render() {
        const icons = <div>
            <Icon name={'camera'} style={{padding: '1em'}}/>
            <Icon name={'bars'} transform={'rotate-90'}/>
        </div>
        return (
            <div className='ws-card'>
                <h2>Icons</h2>
                <CodeDemo title='Plain Icons' code={ icons } />
            </div>
        )
    }
}