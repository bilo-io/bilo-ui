import React, { Component } from 'react'
import { If } from '../../components'
import Application from './application'
import Buttons from './buttons'
import Cards from './cards'
import Icons from './icons'
import Inputs from './inputs'
import Loaders from './loaders'
import Media from './media'
import './style.scss'

export default class BiloUI extends Component {
    state = {
        activePage: 'home'
    }
    selectSection = (page) => {
        this.setState({ ...this.state, activePage: page }, () => console.log(this.state))
    }

    render() {
        const uiPages = [
            'home',
            'application',
            'buttons',
            'cards',
            'dropdowns',
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
                            return <div
                                key={`xui-page-${page}`}
                                className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}
                                onClick={() => this.selectSection(page)}>
                                {page.toLocaleUpperCase()}
                            </div>
                        })
                    }    
                </div>
                <div className={'nav-content'}>
                    <If isTrue={activePage === 'home'}>
                        <Application />
                        <Buttons />
                        <Cards />
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
}