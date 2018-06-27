import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Code} from './code'
import {Card, Icon} from '../'
import './style.scss'

export const propTypesCodeDocs = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    code: PropTypes.object,
}

export class CodeDocs extends Component {
    static propTypes = {
        ...propTypesCodeDocs
    }
    state = {
        isOpen: false
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen} = this.state
        const {code, title, language} = this.props
        return this.state && code
            ? (
                <div
                    className='ws-card'
                    style={{
                    paddingBottom: '1em'
                }}>
                    <div className='code-docs'>
                        <span className='title'>{title}</span>
                        <div className='toggle' onClick={() => this.toggle()}>
                            <Icon name='code'/>
                        </div>
                        <br/>
                        <div className='code-block'>
                            {
                                isOpen
                                    ? <Card className='code-block'>
                                    <Code code={ code } language={ language || 'html' } />
                                </Card>
                                : null
                            }
                        </div>
                    </div>
                    {code}
                </div>
            )
            : null
    }
}

export default CodeDocs