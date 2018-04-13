import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import deepAssign from 'deep-assign'
import {Card, Icon} from '../'
import './style.scss'
// Code
import Highlight from 'react-highlight.js'
import jsxToString from 'jsx-to-string-2'

export const propTypesCodeDemo = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    code: PropTypes.object,
    language: PropTypes.string,
    functionNameOnly: PropTypes.bool,
    useFunctionCode: PropTypes.bool
}

export class CodeDemo extends Component {
    static propTypes = {
        ...propTypesCodeDemo
    }
    state = {
        isOpen: false
    }

    componentDidMount() {
        const {
            code,
            title,
            functionNameOnly,
            useFunctionCode
        } = this.props;

        this.setState({
            codeString: jsxToString(code, {
                useFunctionCode: true
            })
        })
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen, codeString} = this.state;
        const {code, title, language, propTypes} = this.props;
        return this.state && code
            ? (
                <div
                    className='ws-card'
                    style={{
                    paddingBottom: '1em'
                }}>
                    <div className='code-demo'>
                        <span className='title'>{title}</span>
                        <div className='toggle' onClick={() => this.toggle()}>
                            <Icon name='code'/>
                        </div>
                        <br/>
                        <div className='code-block'>
                            {code && isOpen
                                ? <Card>
                                    <Highlight language={language || 'html'}>
                                        {
                                            codeString
                                                ? codeString
                                                : ''
                                        }
                                    </Highlight>
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

export default CodeDemo