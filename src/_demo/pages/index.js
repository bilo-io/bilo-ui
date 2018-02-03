import React, { Component } from 'react'
import { If } from '../../components'
import Application from './application'
import Buttons from './buttons'
import Cards from './cards'
import Dropdowns from './dropdowns'
import Files from './files'
import Icons from './icons'
import Inputs from './inputs'
import Loaders from './loaders'
import Media from './media'
import './style.scss'
import { Link } from 'react-router-dom'

export default class BiloUI extends Component {
    state = {
        activePage: 'files'
    }
    componentDidMount() {
        console.log(this.props.location)
        const page = this.props.location.hash.slice(1)
        console.log('hash: ', page)
        this.selectSection(page)
    }
    render() {
        const uiPages = [
            'all',
            'application',
            'buttons',
            'cards',
            'dropdowns',
            'files',
            'icons',
            'inputs',
            'loaders',
            'media',
            'modals',
        ]
        const { activePage } = this.state
        return (
            <div className='page page-padded'>
                <div className={'nav-menu'}>
                    {
                        uiPages.map((page) => {
                            // return <div
                            //     key={`xui-page-${page}`}
                            //     className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}
                            //     onClick={() => this.selectSection(page)}>
                            //     {page.toLocaleUpperCase()}
                            // </div>
                            return <Link
                                key={`xui-page-${page}`}
                                to={`${this.props.location.pathname}#${page}`}
                                onClick={() => this.selectSection(page)}>
                                <div
                                    className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}>
                                    {page.toLocaleUpperCase()}
                                </div>
                            </Link>
                        })
                    }    
                </div>
                <div className={'nav-content'}>
                    <If isTrue={activePage === 'all'}>
                        <Application />
                        <Buttons />
                        <Cards />
                        <Dropdowns />
                        <Files />
                        <Icons />
                        <Inputs />    
                        <Media />    
                        <Loaders />  
                    </If>    
                    <If isTrue={activePage === 'application'}>
                        <Application />
                    </If>
                    <If isTrue={activePage === 'buttons'}>
                        <Buttons />
                    </If>
                    <If isTrue={activePage === 'cards'}>
                        <Cards />
                    </If>
                    <If isTrue={activePage === 'dropdowns'}>
                        <Dropdowns />
                    </If>
                    <If isTrue={activePage === 'files'}>
                        <Files />
                    </If>
                    <If isTrue={activePage === 'icons'}>
                        <Icons />
                    </If>
                    <If isTrue={activePage === 'inputs'}>
                        <Inputs />
                    </If> 
                    <If isTrue={activePage === 'media'}>
                        <Media />
                    </If> 
                    <If isTrue={activePage === 'loaders'}>
                        <Loaders />
                    </If>
                </div>
            </div>
        )
    }
    selectSection = (page) => {
        this.setState({ ...this.state, activePage: (page || 'all') }, () => console.log(this.state))
    }
}