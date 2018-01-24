import React, { Component } from 'react'
import { Button, Icon, Loader, LoaderType } from '../../components';
import CodeDemo from '../../components/code-demo'

export default class Loaders extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Loaders</h2>
                <CodeDemo code={ 
                    <div>
                        <Loader type={LoaderType.SPINNER}/>
                        <Loader type={LoaderType.RAINBOW} />
                    </div> 
                } />
            </div>
        )
    }
}