import React, {Component} from 'react'
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
        const {loading, type, color} = this.props
        let loaderType = type || LoaderType.SPINNER
        switch (loaderType) {
            case LoaderType.SPINNER:
                return <Spinner/>
            case LoaderType.SPINNER_2:
                return <Spinner double/>
            case LoaderType.RAINBOW:
                return <RainBowLoader/>
            case LoaderType.FULLSCREEN:
                return <FullScreenLoader/>
            case LoaderType.MDSPINNER:
                return <MDSpinner/>
            case LoaderType.ELLIPSIS:
                return <Ellipsis color={color}/>
            case LoaderType.UI3SPIN:
                return <UI3Spin color={color}/>
            default:
                console.warn(`<Loader />: couldn't find loader with type: '${loaderType}'`)
                return <div>Loading...</div>
        }
    }
}
export const LoaderType = {
    SPINNER: 'spinner',
    SPINNER_2: 'spinner-2',
    FULLSCREEN: 'fullscreen',
    RAINBOW: 'rainbow',
    ELLIPSIS: 'ellipsis',
    MDSPINNER: 'md-spin',
    UI3SPIN: 'ui-3-spin'
}

export const Ellipsis = (props) => <span className='ellipsis' style={{
    color: props.color || 'white'
}}></span>

export const MDSpinner = (props) => <span className='md-spin'/>

export const Spinner = (props) => <span style={{borderWidth: '2px'}} className={`loader ${props.double
    ? 'double'
    : ''}`}/>

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

export const UI3Spin = (props) =>(
    <div></div>
)
