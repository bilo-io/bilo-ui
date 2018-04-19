import React, { Component } from 'react'
import {
    Button,
    CodeDocs,
    Icon,
    Loader,
    LoaderType,
    PropTypeDocs,
    propTypesIcon
} from '../../'
import docs from '../../util/proptypes'

export default class Icons extends Component {
    componentWillMount() {
        console.log(propTypesIcon, docs.Icon)
    }
    render() {
        return (
            <div className='ws-card'>
                <h2>Icons</h2>
                <div>
                    <PropTypeDocs
                        docs={docs.Icon}
                        propTypes={propTypesIcon}
                    />
                    <CodeDocs title='social media' code={ 
                        <div>
                            <Icon name={'google'} style={{ padding: '1em' }} />
                            <Icon name={'facebook-official'} style={{ padding: '1em' }} />
                            <Icon name={'twitter'} style={{ padding: '1em' }} />
                            <Icon name={'linkedin'} style={{ padding: '1em' }} />
                        </div>
                    }/>
                    <CodeDocs title='arrows' code={ 
                        <div>
                            <Icon name={'arrow-left'} style={{ padding: '1em' }} />
                            <Icon name={'arrow-down'} style={{ padding: '1em' }} />
                            <Icon name={'arrow-right'} style={{ padding: '1em' }} />
                            <Icon name={'arrow-up'} style={{ padding: '1em' }} />
                        </div>
                    }/>
                    <CodeDocs title='user interface' code={ 
                        <div>
                            <Icon name={'bars'} style={{ padding: '1em' }} />
                            <Icon name={'envelope'} style={{ padding: '1em' }} />
                            <Icon name={'heart'} style={{ padding: '1em' }} />
                            <Icon name={'heart-o'} style={{ padding: '1em' }} />
                        </div>
                    }/>
                    <CodeDocs title='rotation' code={ 
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