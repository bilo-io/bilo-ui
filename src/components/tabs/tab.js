import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export class Tab extends Component {
    static propTypes = {
        tab: PropTypes.string
    }
    render() {
        const { active, tab, onClick } = this.props
        return <div
            className={`tab-button ${active ? 'tab-button-active' : ''}`}
            onClick={onClick}>
            {tab}
        </div>
    }
}