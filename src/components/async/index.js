import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader, LoaderType } from '../'
import './style.scss';

export class Async extends Component {
    static propTypes = {
        resource: PropTypes.object.isRequired,
    }
    state = {
    }
    render() {
        const { resource, spinner } = this.props
        return (
            <div>
                {
                    resource.isLoading
                        ? spinner
                            ? spinner
                            : <Loader type={LoaderType.SPINNER} />
                        : <span>!loading</span>
                }
                {
                    resource.isError && !resource.isLoading &&
                    <AsyncError error={resource.error} />
                }
                {
                    resource.data && !resource.isLoading && !resource.isError
                        ? this.props.children
                        : null
                }
            </div>
        )
    }
}

export const AsyncError = (props) => {
    const { error } = props
    console.log(error)
    return <div className='async-error'>
        <h4>{error.message}</h4>
        <div>
                {/* {error.message} */}
                This is an error
        </div>
    </div>
}

export default Async