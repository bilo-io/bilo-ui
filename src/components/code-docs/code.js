import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Highlight from 'react-highlight.js'
import jsxToString from 'jsx-to-string-2'

export const propTypesCodeDocs = {
    code: PropTypes.object,
    language: PropTypes.string,
    functionNameOnly: PropTypes.bool,
    useFunctionCode: PropTypes.bool
}

export class Code extends Component {
    static propTypes = {
        ...propTypesCodeDocs
    }
    state = {
        isOpen: false
    }

    componentDidMount() {
        const { code, language } = this.props
        this.setState({
            codeString: ['jsx', 'html'].includes(language)
                ? jsxToString(code, {
                    useFunctionCode: true
                })
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