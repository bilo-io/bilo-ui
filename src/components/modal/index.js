import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'components'
import './style.scss'

export class Modal extends Component {
    static propTypes = {
        header: PropTypes.string.isRequired,
        content: PropTypes.element,
        footer: PropTypes.element,
        children: PropTypes.element,
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    }
    render() {
        const {
            header,
            content,
            footer,
            children,
            isOpen,
            onClose
        } = this.props
        return <div className={`modal-container ${!isOpen ? 'closed': ''}`}>
            <div className='modal'>
                <div className='modal-header'>
                    <span>{header}</span>
                    <span className='close-button' onClick={onClose}><Icon name='times'/></span>
                </div>
                <div className='modal-body'>{content || children}</div>
                {
                    footer && <div className='modal-footer flex-row-rev'>
                        { footer }
                    </div>
                }
            </div>
        </div>
    }
}

export default Modal
