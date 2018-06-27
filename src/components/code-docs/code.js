import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Highlight from 'react-highlight.js'
import jsxToString from 'jsx-to-string-2'

export const propTypesCode = {
    code: PropTypes.object,
    language: PropTypes.string,
    jsxFunctionName: PropTypes.bool
}

export class Code extends Component {
    static propTypes = {
        ...propTypesCode
    }
    static defaultProps = {
        code: `<div>This is example code</div>`,
        language: `html`,
        jsxFunctionName: true
    }
    state = {
        isOpen: false
    }
    componentDidMount() {
        const { code, language, jsxFunctionCode, jsxFunctionName } = this.props

        this.setState({
            codeString: ['jsx', 'html'].includes(language)
                ? jsxToString(code, {
                    useFunctionCode: true,
                    functionNameOnly: jsxFunctionName
                })
                : code.string
                    ? code.string
                    : `ERROR: COULD NOT PROCESS CODE WITH LANG: ${language}`
        })
    }
    render() {
        const {isOpen, codeString} = this.state;
        const { code, language } = this.props;
        return code
            ? <Highlight language={language}>
                    {
                        codeString
                            ? codeString
                            : ''
                    }
                </Highlight>
            : null
    }
}

export default Code