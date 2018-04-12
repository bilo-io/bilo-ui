import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export const propTypesLoader = {
    type: PropTypes.string,
    loading: PropTypes.bool
}
export class Loader extends Component {
    static propTypes = {
        ...propTypesLoader
    }
    constructor(props) {
        super(props)
    }

    render() {
        const { loading, type } = this.props
        let loaderType = type || LoaderType.SPINNER
        switch (loaderType) {
            case LoaderType.SPINNER:
                return <Spinner />    
            case LoaderType.RAINBOW:
                return <RainBowLoader/>
            case LoaderType.FULLSCREEN:
                return <FullScreenLoader/>
            default:
                console.warn(`<Loader />: couldn't find loader with type: "${loaderType}"`)    
                return (
                    <div>Loading...</div>
                )
        }
    }
}
export const LoaderType = {
    SPINNER: 'spinner',
    FULLSCREEN: 'fullscreen',
    RAINBOW: 'rainbow'
}
export const Spinner = (props) => <span className='loader'></span>

export const RainBowLoader = (props) => <div className='bar-loader'>
    <div className='bar1'></div>
    <div className='bar2'></div>
    <div className='bar3'></div>
    <div className='bar4'></div>
    <div className='bar5'></div>
    <div className='bar6'></div>
</div>

export const FullScreenLoader = (props) => (
    <div id='preloader'>
        <div id='loader'></div>
    </div>
)

export default Loader