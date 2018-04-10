import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import deepAssign from 'deep-assign'
import {Card, Icon} from '../'
import './style.scss'
// PropTypes
import propTypesToObject from '../../util/proptype-obj'
import propTypesToDescriptions from '../../util/proptype-desc';
import docs from '../../util/proptypes'
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
const propTypeObject = propTypesToObject({
    propTypes: props
})
const propTypeDesc = propTypesToDescriptions({
    propTypes: props,
    data: docs.propTypes.CodeDemo
})
// TOD: merge these with a deep copy (e.g. 'deep-assing')
const propTypeDocs = {
    ...propTypeObject,
    ...propTypeDesc,
    propTypes: {
        ...propTypeObject.propTypes,
        ...propTypeDesc.propTypes
    }
}
export class CodeDemo extends Component {
    static propTypes = {
        ...props
    }
    state = {
        isOpen: false
    }

    componentDidMount() {
        const {code, title, functionNameOnly, useFunctionCode} = this.props;
        this.setState({
            codeString: jsxToString(code, {
                // functionNameOnly: true,
                useFunctionCode: true
            })
        })
        console.log('proptypes', propTypeDocs)
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen, codeString} = this.state;
        const {code, title, language} = this.props;
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
                                        <PropTypesDocs propTypes={propTypeDocs} />
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

export const PropTypesDocs = (props) => {
    return <Table propTypes={props.propTypes}/>
}

const getRows = propTypes => Object
    .keys(propTypes)
    .map(prop => (
        <tr key={prop}>
            <td>{prop}</td>
            <td><pre>{propTypes[prop].type}</pre></td>
            <td>{propTypes[prop].required && propTypes[prop]
                    .required
                    .toString()}</td>
            <td>{propTypes[prop].description}</td>
        </tr>
    ));

const Table = ({propTypes}) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required?</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {getRows(propTypes)}
        </tbody>
    </table>
);
export default CodeDemo