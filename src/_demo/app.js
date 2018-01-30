import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
            <Router>
                <div className='fullscreen'>
                    <AppTopBar>
                        <img src='https://www.adamscenter.org/wp-content/uploads/2015/03/code-icon.png' />
                        bilo-ui
                    </AppTopBar>
                    <AppBody>
                        <Switch>
                            <Route path='/' component={BiloUI} />
                        </Switch>
                    </AppBody>
                </div>
            </Router>
            : null
    }
}

export default App;