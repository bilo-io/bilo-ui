import React from 'react'
import {AppTopBar, AppSidenav, AppBody} from '../components'
import BiloUI from './pages/'
require('./app.scss');

export class App extends React.Component {
    componentWillMount() {
        this.setState({
        })
    }

    render() {
        let {sidenav} = this.state;
        return this.state
            ?
            <div>
                <AppTopBar>
                    Bilo UI
                </AppTopBar>
                <AppBody>
                    <BiloUI />
                </AppBody>
            </div>
            : null
    }
}

export default App;