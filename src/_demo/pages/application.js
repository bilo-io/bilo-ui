import React, { Component }  from 'react'
import CodeDemo from '../../components/code-demo'
import AppBody from '../../components/app-body'
import AppSidenav from '../../components/app-sidenav'
import AppTopBar from '../../components/app-top-bar'

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
        }
    }
    render() {
        const { sidenav } = this.state
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
                        <AppSidenav
                                isOpen={sidenav.isOpen}>
                                {sidenav.items.map((page) => 
                                    <div className='sidenav-link'>{page.name}</div>
                                        // return <Link
                                        //     key={page.link}
                                        //     to={page.link}
                                        //     className='sidenav-link'
                                        //     onClick={() => {
                                        //     this.toggleSidenav()
                                        // }}>
                                        //     {page.name}
                                        // </Link>
                                    )}
                            </AppSidenav>
                        </AppBody>
                    </div>                   
                }/>
                <CodeDemo title='AppTopBar' code={
                    <div style={{position: 'relative'}}>
                        <AppTopBar>
                            Application Title Bar
                        </AppTopBar>
                        <br />
                        <AppTopBar style={{backgroune: '', color: ''}}>
                            <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                                Application Title Bar
                        </AppTopBar>
                        <br />
                        <AppTopBar style={{background: 'lightgrey', color: 'black'}}>
                                Application Title Bar
                        </AppTopBar>
                        <br />
                        <AppTopBar style={{backgroune: '', color: ''}}>
                                Application Title Bar
                        </AppTopBar>
                        <br />
                        <AppTopBar style={{backgroune: '', color: ''}}>
                                Application Title Bar
                        </AppTopBar>
                    </div>                   
                }/>
                <CodeDemo title='AppSidenav' code={
                    <div>
                        {/* <AppSideNav isOpen={true}/> */}
                    </div>                   
                }/>
                <CodeDemo title='AppBody' code={
                    <div>
                        
                    </div>                   
                }/>
                <CodeDemo title='AppToaster' code={
                    <div>
                        
                    </div>                   
                }/>
            </div>
        )
    }
    toggleSidenav() {
        let sidenav = this.state.sidenav
        this.setState({
            ...this.state,
            sidenav: {
                ...sidenav,
                isOpen: !sidenav.isOpen
            }
        }, () => console.log(this.state.sidenav));
    }
}