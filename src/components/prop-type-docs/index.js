import React, { Component } from 'react';
import { Card } from '../'
import PropTypes from 'prop-types'
import propTypesToObject from './getObject'
import propTypesToDescriptions from './getDescription'
import docs from '../../util/proptypes'
import './style.scss'
export class PropTypeDocs extends Component {
    componentDidMount() {
        const {
            docs,
            propTypes
        } = this.props
        const propTypeObject = propTypesToObject({
            propTypes: propTypes
        })
        const propTypeDesc = propTypesToDescriptions({
            data: this.props.docs.propTypes,
            propTypes: this.props.propTypes
        })
        // TODO: merge these with a deep copy (e.g. 'deep-assing')
        const keys = Object.keys(propTypeObject)
        let propTypeDocs = {}
        keys.forEach((key) => {
            let obj = {
                ...propTypeObject[key],
                ...propTypeDesc[key]
            }
            propTypeDocs[key] = obj
        })
        this.setState({
            propTypes: propTypeDocs
        })
    }
    componentDidMount() {
        const { propTypes } = this.props
        console.log({ propTypes })
    }

    render() {
        return this.state
            ? <Table propTypes={this.state.propTypes} />
            : null
    }
}

const getRows = propTypes => Object
    .keys(propTypes)
    .map(prop => (
        <tr key={prop}>
            <td>{prop}</td>
            <td><pre>{propTypes[prop].type}</pre></td>
            <td>{propTypes[prop].required ? 'Yes':'No'}</td>
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
)

export default PropTypeDocs