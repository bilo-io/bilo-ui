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
                return <span className='loader'></span>    
            case LoaderType.RAINBOW:
                return (
                    <div className='bar-loader'>
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>
                            <div className='bar4'></div>
                            <div className='bar5'></div>
                            <div className='bar6'></div>
                        </div>
                    )
            case LoaderType.FULLSCREEN:
                return (
                    <div id='preloader'>
                        <div id='loader'></div>
                    </div>
                )
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