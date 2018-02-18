import React from 'react'
import './style.scss';

export default class Loader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let loaderType = this.props.type || LoaderType.SPINNER;
        let loading = this.props.loading;
        switch (loaderType) {
            case LoaderType.SPINNER:
                return <Spinner />    
            case LoaderType.RAINBOW:
                return <RainBowLoader/>
            case LoaderType.FULLSCREEN:
                return <FullScreenLoader/>
            default:
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