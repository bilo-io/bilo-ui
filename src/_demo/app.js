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
            <div className='fullscreen'>
                <AppTopBar>
                    <img src='https://www.adamscenter.org/wp-content/uploads/2015/03/code-icon.png' />
                    bilo-ui
                </AppTopBar>
                <AppBody>
                    <BiloUI />
                </AppBody>
            </div>
            : null
    }
}

export default App;