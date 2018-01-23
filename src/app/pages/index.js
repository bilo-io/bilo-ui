import React, { Component } from 'react'
import Icons from './icons'
import Inputs from './inputs'
import Media from './media'
import Loaders from './loaders'

export default class BiloUI extends Component {
    render() {
        const uiPages = [
            'home',
            'icons',
            'inputs',
            'loaders',
            'media',
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
                        <Icons />
                        <Inputs />    
                        <Media />    
                        <Loaders />  
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