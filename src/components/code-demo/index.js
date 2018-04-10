import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import deepAssign from 'deep-assign'
import {Card, Icon} from '../'
import './style.scss'
// PropTypes
import PropTypeDocs from './'
// import propTypesToObject from '../../util/proptype-obj'
// import propTypesToDescriptions from '../../util/proptype-desc';
// import docs from '../../util/proptypes'
// Code
import Highlight from 'react-highlight.js'
import jsxToString from 'jsx-to-string-2'

const props = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    code: PropTypes.object,
    language: PropTypes.string,
    functionNameOnly: PropTypes.bool,
    useFunctionCode: PropTypes.bool
}

export class CodeDemo extends Component {
    static propTypes = {
        ...props
    }
    state = {
        isOpen: false
    }

    componentDidMount() {
        const {
            code,
            title,
            functionNameOnly,
            useFunctionCode,
            propTypes
        } = this.props;
        this.setState({
            codeString: jsxToString(code, {
                // functionNameOnly: true,
                useFunctionCode: true
            })
        })
        // console.log('proptypes', propTypeDocs)
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
                                ? <div>
                                    <Card>
                                        {
                                            props
                                                ? <PropTypeDocs propTypes={this.props.propTypes} />
                                                : null
                                        }
                                    </Card>
                                    <Card>
                                        <Highlight language={language || 'html'}>
                                            {codeString
                                                ? codeString
                                                : ''}
                                        </Highlight>
                                    </Card>
                                </div>
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