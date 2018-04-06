import React, { Component } from 'react'
import {Button, Icon, Loader, LoaderType} from '../../'
import CodeDemo from '../../components/code-demo'

export default class Icons extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Icons</h2>
                
                    <div>
                        <CodeDemo title='social media' code={ 
                            <div>
                                <Icon name={'google'} style={{ padding: '1em' }} />
                                <Icon name={'facebook-official'} style={{ padding: '1em' }} />
                                <Icon name={'twitter'} style={{ padding: '1em' }} />
                                <Icon name={'linkedin'} style={{ padding: '1em' }} />
                            </div>
                        }/>
                        <CodeDemo title='arrows' code={ 
                            <div>
                                <Icon name={'arrow-left'} style={{ padding: '1em' }} />
                                <Icon name={'arrow-down'} style={{ padding: '1em' }} />
                                <Icon name={'arrow-right'} style={{ padding: '1em' }} />
                                <Icon name={'arrow-up'} style={{ padding: '1em' }} />
                            </div>
                        }/>
                        <CodeDemo title='user interface' code={ 
                            <div>
                                <Icon name={'bars'} style={{ padding: '1em' }} />
                                <Icon name={'envelope'} style={{ padding: '1em' }} />
                                <Icon name={'heart'} style={{ padding: '1em' }} />
                                <Icon name={'heart-o'} style={{ padding: '1em' }} />
                            </div>
                        }/>
                        <CodeDemo title='rotation' code={ 
                            <div>
                                <Icon name={'bars'} style={{ padding: '1em' }}/>
                                <Icon name={'bars'} transform={'rotate-90'} style={{ padding: '1em' }}/>
                                <Icon name={'bars'} transform={'rotate-180'} style={{ padding: '1em' }}/>
                                <Icon name={'bars'} transform={'rotate-270'} style={{ padding: '1em' }}/>
                            </div>
                        }/>
                    </div>
                 } />
            </div>
        )
    }
}