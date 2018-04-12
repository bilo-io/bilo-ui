import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style'

export const propTypesToaster = {
    toasts: PropTypes.array
}
export class Toaster extends Component {
    static propTypes = {
        ...propTypesToaster
    }
    render() {
        const { toasts } = this.props
        return 
            <div className='toaster'>
            {
                toasts.map((t) => {
                    let toastStyle = t.style || 'default';
                    <div className={`toast-${toastStyle}`}>{t.message}</div>
                })
            }
        </div>
    }
}

export default Toaster