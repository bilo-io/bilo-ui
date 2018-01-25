import React, { Component }  from 'react'
import CodeDemo from '../../components/code-demo'
import AppBody from '../../components/app-body'
import AppSidenav from '../../components/app-sidenav'
import AppTopBar from '../../components/app-top-bar'

export default class Application extends Component {
    render() {
        return (
            <div>
                <CodeDemo title='Application' code={
                    <div style={{position: 'relative'}}>
                        {/* <AppTopBar>
                            Hello
                        </AppTopBar>
                        <AppBody>
                        </AppBody> */}
                    </div>                   
                }/>
                <CodeDemo title='AppTopBar' code={
                    <div>
                        
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
}