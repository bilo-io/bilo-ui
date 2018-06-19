import React, { Component } from 'react'
import { Button, Icon, Loader, LoaderType } from '../../'
import CodeDocs from '../../components/code-docs'
import Catch from '../../components/catch'

export default class Errors extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Loaders</h2>
                <CodeDocs code={ 
                    <div>
                        <Catch>
                            Showing state: {this.state && this.state.person}
                            <Error />
                        </Catch>
                    </div>
                } />
            </div>
        )
    }
}

class Error extends Component {
    state = {
        timeout: 5
    }
    componentDidMount() {
        const { timeout } = this.state
        setTimeout( () => {
            setInterval( () => this.setState({
                timeout: timeout - 1
            }), 1000)
            this.setState({
                thrownError: true
            })
        }, timeout * 1000)
    }
    render() {
        if(this.state && this.state.thrownError) {
            throw new Error('Simulated Error', 'This error message was intentional, for the purpose of demoing the <Catch /> component.')
        }
        return <div>Error will happen soon {this.state.timeout}</div>
    }
}