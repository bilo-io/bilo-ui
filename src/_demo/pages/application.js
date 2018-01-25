import React, { Component }  from 'react'
import CodeDemo from '../../components/CodeDemo'
import AppBody from '../../components/AppBody'
import AppSidenav from '../../components/AppSidenav'
import AppTopBar from '../../components/AppTopBar'
import AppToaster, { addToast } from '../../components/AppToaster'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
export default class Application extends Component {
    state = {
        sidenav: {
            isOpen: true,
            items: [
                {
                    link: '/',
                    name: 'Home'
                },
                {
                    link: '/page1',
                    name: 'Page 1'
                },
                {
                    link: '/page2',
                    name: 'Page 2'
                },
            ]
        },
        toaster: {
        }
    }
    render() {
        const { sidenav, toaster } = this.state
        const reactIcon = 'https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
        return (
            <div>
                <CodeDemo title='Application' code={
                    <div style={{position: 'relative', height: '50vh'}}>
                        <AppTopBar>
                            <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            <span>Application structure</span>
                        </AppTopBar>
                        <AppBody>
                            <AppToaster toast={ toaster.toast ? toaster.toast : undefined }/>
                            <AppSidenav
                                isOpen={sidenav.isOpen}>
                                {sidenav.items.map((page, i) => 
                                    <div
                                        key={i}
                                        className='sidenav-link'
                                        onClick={this.toggleSidenav}>
                                        {page.name}
                                    </div>
                                    )}
                            </AppSidenav>
                            <Button
                                className='primary'
                                onClick={() => addToast(this, 'this is a toast', 'primary' )}>
                                add toast
                            </Button>
                            <Button
                                className='secondary'
                                onClick={() => addToast(this,'this is a toast', 'secondary')}>
                                add toast
                            </Button>
                            <Button
                                className='warning'
                                onClick={() => addToast(this,'this is a toast', 'warning')}>
                                add toast
                            </Button>
                        </AppBody>
                    </div>                   
                }/>
                <CodeDemo title='AppTopBar' code={
                    <div style={{position: 'relative'}}>
                        <AppTopBar style={{backgroune: '', color: ''}}>
                            <img
                                src={ reactIcon }
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                                Application Title Bar
                        </AppTopBar>
                        <br />
                        <AppTopBar style={{background: 'lightgrey', color: 'black'}}>
                            <img
                                src={ reactIcon }
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            Application Title Bar
                        </AppTopBar>
                        <br />
                        <AppTopBar style={{ background: '#00adee', color: 'white' }}>
                            <img
                                src={ reactIcon }
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            Application Title Bar
                        </AppTopBar>
                    </div>                   
                }/>
                <CodeDemo title='AppSidenav' code={
                    <div style={{position: 'relative', height: '50vh'}}>
                        <AppSidenav isOpen={true} fromRight={true}/>
                        
                    </div>                   
                }/>
                <CodeDemo title='AppToaster' code={
                    <div style={{ position: 'relative', height: '20em' }}>
                        <AppToaster toast={ toaster.toast ? toaster.toast : undefined }/>
                        <div style={{ position: 'relative', top: '17em' }}>
                            <Button
                                className='primary'
                                onClick={() => this.addToast('this is a toast', 'primary')}>
                                add toast
                            </Button>
                            <Button
                                className='secondary'
                                onClick={() => this.addToast('this is a toast', 'secondary')}>
                                add toast
                            </Button>
                            <Button
                                className='warning'
                                onClick={() => this.addToast('this is a toast', 'warning')}>
                                add toast
                            </Button>
                        </div>    
                    </div>                   
                }/>
            </div>
        )
    }
    toggleSidenav = () => {
        let sidenav = this.state.sidenav
        this.setState({
            ...this.state,
            sidenav: {
                ...sidenav,
                isOpen: !sidenav.isOpen
            }
        }, () => console.log(this.state.sidenav));
    }
    addToast(text, type) {
        this.setState({
            ...this.state,
            toaster: {
                toast: {
                    text,
                    type,
                    duration: 2000
                }
            }
        }, () => this.setState({
            ...this.state,
            toaster: {
            }
        }))
    }
}