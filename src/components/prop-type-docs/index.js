import React, {Component} from 'react';
import PropTypes from 'prop-types'
import propTypesToObject from './getObject'
import propTypesToDescriptions from './getDescription'
import docs from '../../util/proptypes'

export class PropTypeDocs extends Component {
    componentWillMount() {
        const propTypeObject = propTypesToObject({
            propTypes: this.props.propTypes
        })
        const propTypeDesc = propTypesToDescriptions({
            propTypes: this.props.propTypes,
            data: this.props.docs
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

        this.setState({
            props: propTypeDocs
        })
    }

    render() {
        return <Table propTypes={this.props.propTypes}/>
    }
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
)

export default PropTypeDocs