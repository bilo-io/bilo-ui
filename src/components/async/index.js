import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Icon,
    InfoPanel,
    Loader,
    LoaderType
} from 'components'

export class Async extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        // CUSTOM
        resource: PropTypes.shape({
            isInit: PropTypes.bool,
            isLoading: PropTypes.bool,
            isSuccess: PropTypes.bool,
            isError: PropTypes.bool,
            data: PropTypes.any.isRequired,
            error: PropTypes.shape({
                message: PropTypes.string,
                status: PropTypes.number,
                statusText: PropTypes.string,
                stack: PropTypes.oneOfType([
                    PropTypes.array,
                    PropTypes.string
                ]),
            }),
        }),
        spinner: PropTypes.element,
        reloadResource: PropTypes.func,
        initText: PropTypes.string,
        loadingText: PropTypes.string,
        retryText: PropTypes.string,
        reloadText: PropTypes.string,
        reloadIcon: PropTypes.string,
        contactSupportText: PropTypes.string,
    }
    static defaultProps = {
        // spinner: <Loader type={ LoaderType.SPINNER } />,
        // spinner: <Loader type={ 'spinner' } />,
        DEBUG: true,
        reloadResource: () => { console.log('NOT_DEFINED: <Async reloadResource={ () => />')},
        initText: '',
        loadingText: '',
        retryText: '',
        reloadText: '',
        reloadIcon: '',
        contactSupportText: '',
        error: {
            message: 'This is a default test error message (defaultProps in the <Async /> Component)',
            status: 9001,
            statusText: 'OVER_NINE_THOUSAND',
            stack: [
                '0: testing the error stack',
                '1: should see these list items',
                '2: stacked in one way or another'
            ]
        }
    }
    state = {
    }
    reloadResource = () => {
        const { DEBUG } = this.props
        DEBUG && console.log('<Async />: reloading resource ...')
        this.props.reloadResource()
    }
    render() {
        const {
            className,
            style,
            children,
            // CUSTOM
            resource,
            spinner,
            reloadResource,
            initText,
            loadingText,
            retryText,
            reloadText,
            reloadIcon,
            contactSupportText,
            ...rest
        } = this.props
        return (
            <div { ...rest }>
                {
                    !resource && <InfoPanel
                        status={'error'}>
                        {'DEV_ERR_001: No resource has been assigned to <Async /> component'}
                    </InfoPanel>
                }
                {
                    resource.isInit &&
                        <AsyncInit
                            submitText={'Load Data'}
                            onLoad={ this.reloadResource }
                        />
                }
                {
                    resource.isLoading &&
                        <AsyncLoader
                            spinner={ spinner || <LoaderType type={ LoaderType.SPINNER } /> }
                            loadingText={ loadingText }
                        />
                }
                {
                    resource.isError &&
                        <AsyncError
                            DEBUG
                            error={ resource.error }
                            onRetry={ this.reloadResource }
                            submitText={'Retry'}
                        />
                }
                {
                    resource.isSuccess &&
                        <AsyncData
                            icon={ reloadIcon }
                            onRefresh={ this.reloadResource }
                            className={ className }
                            style={ style }
                        >
                            { children }
                        </AsyncData>
                }
            </div>
        )
    }
}

export const AsyncInit = ({ onLoad, submitText }) => {
    return <InfoPanel
        status='info'
        title={ 'Initialise data' }
        onSubmit={onLoad}
        submitText={ submitText }>
        Initialised UI ... but no data has been loaded yet.
    </InfoPanel>
}

export const AsyncLoader = ({ spinner }) => {
    return <span className='async'>
        { spinner }
    </span>
}

export const AsyncData = ({ children, className, style, icon, onRefresh }) => {
    return <span
        className={ className }
        style={ style }>
        <div onClick={ onRefresh }><Icon name={ icon } /></div>
        { children }
    </span>
}

export const AsyncError = ({ DEBUG, error, retry, submitText }) => {
    DEBUG && console.log(`AsyncError: `, error)
    if (!error) return null

    const errorMessage = `${error.status}: ${error.statusText}`
    const errorDescription = error.message || 'Unknown Error has occurred'

    return <InfoPanel
        status='error'
        title={ errorMessage }
        submitText={ submitText }
        onSubmit={ retry }
        >
        { errorDescription }
        {
            error.stack && <ErrorStack stack={ error.stack }/>
        }
    </InfoPanel>
}

export const ErrorStack = ({ stack }) => <pre>
    <code>
        {
            (!Array.isArray(stack)
                ? stack.split('\n')
                : stack
            ).map((frame, i) => <div key={ `error-stack-frame-${i}`}>{frame}</div>)
        }
    </code>
</pre>

export default Async
