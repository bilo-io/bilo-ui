import React, { Component } from 'react'
import './style.scss'

export class AppToaster extends Component {
    constructor(props) {
        super(props)
        this.toasts = []
    }
    componentWillReceiveProps(nextProps) {
    // componentWillUpdate(nextProps, nextState) {
        const { toast } = nextProps
        console.log('receiving props', nextProps)
        if (this.props !== nextProps && nextProps && toast) {
            this.addToast(toast)
        }
    }
    render() {
        return (
            <div className='toast-container'>   
                {
                    this.toasts
                        ? this.toasts.map((toast, i) => (
                            <div key={i} className={`toast-${toast.type}`}>
                                {toast.text}
                            </div>
                            ))
                        : null
                }
            </div>
        )
    }
    addToast(toast) {
        this.toasts = [toast, ...this.toasts]
        console.log('adding toast', this.toasts)
        setTimeout(() => {
            this.deleteToast(toast)
        }, toast.duration)
    }
    deleteToast(toast) {
        const deleteIndex = this.toasts.findIndex( (t) => t === toast)
        this.toasts = this.toasts.filter(t => t != toast)
        console.log('deleting toast', this.toasts)
        this.setState({
            ...this.state,
            toastsCount: this.toasts.length
        })
    }
}

export const addToast = (context, text, type) => {
    context.setState({
        ...context.state,
        toaster: {
            toast: {
                text,
                type,
                duration: 2000
            }
        }
    }, () => context.setState({
        ...context.state,
        toaster: {
        }
    }))
}

export default AppToaster