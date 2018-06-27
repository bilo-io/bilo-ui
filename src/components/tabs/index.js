import React, { Component } from 'react'
import { Tab } from './tab'
import PropTypes from 'prop-types'
import './style.scss'

export class Tabs extends Component {
    static propTypbes = {
        tabs: PropTypes.array
    }
    selectTab = (i) => {
        console.log(`<Tabs />: selectTab(${i})`)
        this.props.selectTab(i)
    }
    render() {
        const {
            activeTab,
            tabs,
        } = this.props
        return <div className='tab-container'>
            <div className='tab-panel'>
                {
                    tabs.map((tab, i) => <Tab
                        key={`tab-${i}`}
                        tab={tab}
                        active={ i === activeTab }
                        onClick={() => this.selectTab(i)}
                    />)
                }
            </div>
        </div>
    }
}

export * from './tab'