import React, { Component } from 'react'
import { Button, Icon, propTypesIcon, Loader, LoaderType } from '../../'
import docs from '../../util/proptypes'
import CodeDemo from '../../components/code-demo'
import PropTypes from '../../components/prop-type-docs'

export default class Icons extends Component {
    componentWillMount() {
        console.log(propTypesIcon, docs.propTypes.Icon)
    }
    render() {
        return (
            <div className='ws-card'>
                <h2>Icons</h2>
                
                <div>
                        <PropTypes propTypes={propTypesIcon} docs={docs.propTypes.Icon} />
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
            </div>
        )
    }
}