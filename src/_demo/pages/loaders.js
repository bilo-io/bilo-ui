import React, {Component} from 'react'
import {Button, Card, Icon, Loader, LoaderType} from '../../../'
import CodeDemo from '../../components/code-demo'

export default class Loaders extends Component {
    render() {
        return (
            <Card className='padded'>
                <h2>Loaders</h2>
                <CodeDemo
                    code={<div  style={{
                        height: '30em'
                    }}>
                        <Loader type={LoaderType.SPINNER} />
                        <Loader type={LoaderType.RAINBOW} />
                        <Loader type={LoaderType.FULLSCREEN} />
                    </div>} />
            </Card>
        )
    }
}