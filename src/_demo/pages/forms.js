import React, { Component } from 'react'
import {
    Button,
    CodeDocs,
    Icon,
    Loader,
    LoaderType,
    PropTypeDocs,
    propTypesIcon
} from '../../'
import docs from '../../util/proptypes'

export default class Icons extends Component {
    render() {
        return <div>
            <form id='form-1-test'>
                <input type='username' />
                <input type='password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    }
}