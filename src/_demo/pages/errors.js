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
    componentDidMount() {
        setTimeout( () => {
            this.setState({
                thrownError: true
            })
        }, 5000)
    }
    render() {
        if(this.state && this.state.thrownError) {
            // throw new Error('Simulated Error', 'This error message was intentional, for the purpose of demoing the <Catch /> component.')
        }
        return <div>Error will happen soon</div>
    }
}