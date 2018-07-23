import React, { Component } from 'react'
import { If } from '../../'
import Async from './async'
import Application from './application'
import Buttons from './buttons'
import Cards from './cards'
import Dropdowns from './dropdowns'
import Errors from './errors'
import Files from './files'
import Forms from './forms'
import Icons from './icons'
import Inputs from './inputs'
import Lists from './lists'
import Loaders from './loaders'
import Media from './media'
import Time from './time'
import Trees from './trees'
import { Link } from 'react-router-dom'
import MDReader from '../../components/md-reader'
import readme from '../../../README.md'
import './style.scss'

export default class BiloUI extends Component {
    state = {
        activePage: 'home-page'
    }
    componentDidMount() {
        const page = this.props.location.hash.slice(1)
        this.selectSection(page)
    }

    render() {
        const uiPages = [
            'home',
            'async',
            'all',
            'application',
            'buttons',
            'cards',
            'dropdowns',
            'errors',
            'files',
            'forms',
            'icons',
            'inputs',
            'lists',
            'loaders',
            'media',
            'modals',
            'time',
            // 'trees',
        ]
        const { activePage } = this.state
        return (
            <div className='page page-padded'>
                <div className={'nav-menu'}>
                    {
                        uiPages.map((page) => {
                            return <Link
                                key={`xui-page-${page}`}
                                to={`${this.props.location.pathname}#${page}`}
                                onClick={() => this.selectSection(page)}
                                className='no-link'>
                                <div
                                    className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}>
                                    {
                                        page === 'home'
                                            ? 'bilo-ui'
                                            : page.toLocaleUpperCase()}
                                </div>
                            </Link>
                        })
                    }
                </div>
                <div className={'nav-content'}>
                    <If truthy={activePage === 'all'}>
                        <Async />
                        <Application />
                        <Buttons />
                        <Cards />
                        <Dropdowns />
                        <Errors />
                        <Files />
                        <Icons />
                        <Inputs />
                        <Lists />
                        <Loaders />
                        <Media />
                        <Time />
                        <Trees />
                    </If>
                    <If truthy={activePage === 'home'}>
                        <div>
                            <MDReader markdown={readme} />
                        </div>
                    </If>
                    <If truthy={activePage === 'application'}>
                        <Application />
                    </If>
                    <If truthy={activePage === 'async'}>
                        <Async />
                    </If>
                    <If truthy={activePage === 'buttons'}>
                        <Buttons />
                    </If>
                    <If truthy={activePage === 'cards'}>
                        <Cards />
                    </If>
                    <If truthy={activePage === 'dropdowns'}>
                        <Dropdowns />
                    </If>
                    <If truthy={activePage === 'errors'}>
                        <Errors />
                    </If>
                    <If truthy={activePage === 'files'}>
                        <Files />
                    </If>
                    <If truthy={activePage === 'forms'}>
                        <Forms />
                    </If>
                    <If truthy={activePage === 'icons'}>
                        <Icons />
                    </If>
                    <If truthy={activePage === 'inputs'}>
                        <Inputs />
                    </If>
                    <If truthy={activePage === 'lists'}>
                        <Lists />
                    </If>
                    <If truthy={activePage === 'loaders'}>
                        <Loaders />
                    </If>
                    <If truthy={activePage === 'media'}>
                        <Media />
                    </If>
                    <If truthy={activePage === 'time'}>
                        <Time />
                    </If>
                    <If truthy={activePage === 'trees'}>
                        <Trees />
                    </If>
                </div>
            </div>
        )
    }
    selectSection = (page) => {
        this.setState({ ...this.state, activePage: (page || 'all') }, () => console.log(this.state))
    }
}