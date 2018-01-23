import React from 'react';
// import store from './store';
// import {Route, Switch, Link} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Async from 'react-code-splitting'
// Components
import {AppTopBar, AppSidenav, AppBody} from '../components';
// Containers
import BiloUI from './app'

// require('../app.scss');

export class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {sidenav} = this.state;
        return this.state
            ? (
                // <Router>
                    <div>
                        <AppTopBar>
                            {/* <img
                                src='https://raw.githubusercontent.com/bilo-io/resources/master/logo/react.png'
                                onClick={() => this.toggleSidenav()}
                                width='48'/>
                            <Link to="/">bilo.bio</Link> */}
                        </AppTopBar>
                        <AppBody>
                            <BiloUI />
                        </AppBody>
                    </div>
                // </Router>
            )
            : null
    }
    componentWillMount() {
        this.setState({
            sidenav: {
                isOpen: false,
                items: [
                    {
                        link: '/autocomplete',
                        name: 'autocomplete'
                    },
                    {
                        link: '/',
                        name: 'bilo'
                    // }, {
                    //     link: '/browser',
                    //     name: 'browser'
                    // }, {
                    //     link: '/contact',
                    //     name: 'contact'
                    }, {
                        link: '/browser',
                        name: 'browser'
                    }, {
                        link: '/contact',
                        name: 'contact'
                    // }, {
                    //     link: '/firebase',
                    //     name: 'firebase'
                    // }, {
                    //     link: '/places',
                    //     name: 'places'
                    // }, {
                    //     link: '/playground',
                    //     name: 'playground'
                    }, {
                        link: '/ryda',
                        name: 'ryda'
                    }, {
                        link: '/tutorials',
                        name: 'Tutorials'
                    }, {
                        link: '/wordcloud',
                        name: 'Wordcloud'
                    }, {
                        link: '/xui',
                        name: 'XUI'
                    }
                ]
            }
        })
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

export default App;