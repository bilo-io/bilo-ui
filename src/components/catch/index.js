import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const propTypesCatch = {
    error: PropTypes.string,
    hasError: PropTypes.bool,
    info: PropTypes.string
}
export class Catch extends Component {
    static propTypes = {
        ...propTypesCatch
    }
    state = {}
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({
            error,
            hasError: true,
            info
        }, () => console.log(this.state))

        // logErrorToMyService(error, info);
    }

    render() {
        const {
            error,
            hasError,
            info
        } = this.state
        return (hasError
            ? <div className='error'>
                    <div className='title'>{error}</div>
                    <div className='description'>{info}</div>
                </div>
            : this.props.children)
    }
}

export default Catch