import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Catch extends Component {
    static propTypes = {
    }
    state = {
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true, error, info }, () => console.log(this.state))
        
        // logErrorToMyService(error, info);
      }
    
    render() {
        const { hasError, error, info } = this.state
        return (
            hasError
            ? <div className='error'>
                <div className='title'>{error}</div>
                <div className='description'>{info}</div>
            </div>
            : this.props.children
        )
    }
}
