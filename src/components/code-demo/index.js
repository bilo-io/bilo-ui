import React from 'react';
import { Icon } from '../'
import './style.scss'
import Highlight from 'react-highlight.js'
import jsxToString from 'jsx-to-string-2'

class CodeDemo extends React.Component {
    state = {
        isOpen: true
    }

    componentDidMount() {
        const { code, title, functionNameOnly, useFunctionCode } = this.props;
        this.setState({
            codeString: jsxToString(code, {
                functionNameOnly: true,
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
        const { isOpen, codeString } = this.state;
        const { code, title } = this.props;
        return this.state && code ? (
            <div className='ws-card'>
                <div className='code-demo'>
                    <span className='title'>{ title }</span>
                    <div className='toggle' onClick={() => this.toggle()}>
                        <Icon name='code' /> 
                    </div>
                    <br />
                    <div className='code-block'>
                        {
                            code && isOpen
                            ? <Highlight language={'html'}>
                                {codeString ? codeString : ''}
                            </Highlight> 
                            :null
                        }
                    </div>
                </div>
                { code }
            </div>
        ) : null
    }
}

export default CodeDemo;