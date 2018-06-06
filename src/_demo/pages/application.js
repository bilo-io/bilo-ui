import React, { Component }  from 'react'
import {
    AppBody,
    AppSidenav,
    AppTopBar,
    AppToaster,
    Button,
    CodeDocs,
    If,
    Icon,
    PropTypeDocs,
    propTypesAppTopBar
} from '../../components'

import docs from '../../util/proptypes'
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
        sidenavLeft: {
            isOpen: false,
        },
        sidenavRight: {
            isOpen: false,
        },
        toaster: {
        }
    }
    render() {
        const { sidenav, sidenavLeft, sidenavRight, toaster } = this.state
        const reactIcon = 'https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
        return (
            <div>
                <PropTypeDocs
                    propTypes={propTypesAppTopBar}
                    docs={docs.AppTopBar}
                />
                <CodeDocs title='Application' code={
                    <div style={{position: 'relative', height: '50vh'}}>
                        <AppTopBar>
                            <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            <span>Application structure</span>
                        </AppTopBar>
                        <AppBody>
                            <AppToaster toast={ toaster.toast }/>
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
                            <div style={{
                                position: 'relative',
                                // bottom: '1em'
                                margin: 'auto'
                            }}>
                                <Button
                                    className='primary'
                                    onClick={() => this.addToast('this is a toast', 'primary' )}>
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
                                <Button
                                    className='danger'
                                    onClick={() => this.addToast('this is a toast', 'danger')}>
                                    add toast
                                </Button>
                            </div>
                        </AppBody>
                    </div>
                }/>
                <CodeDocs title='AppTopBar' code={
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
                {/* <CodeDocs title='AppSidenav' code={
                    <div style={{position: 'relative', height: '50vh'}}>
                        <AppSidenav
                            isOpen={sidenavLeft.isOpen}>
                            {sidenav.items.map((page, i) =>
                                <div
                                    key={i}
                                    className='sidenav-link'
                                    onClick={this.toggleSidenavLeft}>
                                    {page.name}
                                </div>
                            )}
                        </AppSidenav>
                        <AppSidenav
                            isOpen={sidenavRight.isOpen}
                            fromRight={true}>
                            {sidenav.items.map((page, i) =>
                                <div
                                    key={i}
                                    className='sidenav-link'
                                    onClick={this.toggleSidenavRight}>
                                    {page.name}
                                </div>
                            )}
                        </AppSidenav>
                        <div style={{position: 'absolute', left: '30%', top: '40%'}}>
                            <Button className='primary' onClick={this.toggleSidenavLeft}>Left</Button>
                            <Button className='primary' onClick={this.toggleSidenavRight}>Right</Button>
                        </div>
                    </div>
                }/> */}
                <CodeDocs title='AppToaster' code={
                    <div style={{ position: 'relative', height: '20em' }}>
                        <AppToaster toast={ toaster.toast }/>
                        <div style={{ position: 'absolute', bottom: '0', margin: 'auto' }}>
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
                            <Button
                                className='danger'
                                onClick={() => this.addToast('this is a toast', 'danger')}>
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
    toggleSidenavLeft = () => this.setState({
        ...this.state,
        sidenavLeft: {
            ...this.state.sidenavLeft,
            isOpen: !this.state.sidenavLeft.isOpen
        }
    })
    toggleSidenavRight = () => this.setState({
        ...this.state,
        sidenavRight: {
            ...this.state.sidenavRight,
            isOpen: !this.state.sidenavRight.isOpen
        }
    })
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