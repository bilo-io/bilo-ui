import React, { Component } from 'react'
import {
    Button,
    CodeDocs,
    Icon,
    PropTypeDocs,
    propTypesButton
} from '../../'
import docs from '../../util/proptypes'
import { Async } from '../../components'
export default class AsyncDemo extends Component {
    state = {
        loading: {
            isLoading: true
        },
        error: {
            isError: true,
            error: {
                message: 'This is an error',
                status: 444,
                stacktrace: [
                    'Here is something',
                    'you should see',
                    'cannot say what'
                ]
            }
        },
        initArray: {
            isInit: true,
            data: []
        },
        initObj: {
            isInit: true,
            data: {}
        },
        successArray: {
            isSuccess: true,
            data: [
                'dude', 'sweet', 'bro'
            ]
        },
        successObj: {
            isSuccess: true,
            data: 'this string is inside resource.data'
        }
    }
    render() {
        const { loading, error, initArray, initObj, successArray, successObj} = this.state

        return (
            <div>
                <h3>Buttons</h3>
                <PropTypeDocs
                    docs={docs.Button}
                    propTypes={Button.propTypes}
                />
                <CodeDocs title='Init Obj'
                    code={
                        <Async resource={ initObj } />
                    }
                />
                <CodeDocs title='Init Array'
                    code={
                        <Async resource={ initArray } />
                    }
                />
                <CodeDocs title='Loading'
                    code={
                        <Async resource={ loading } />
                    }
                />
                <CodeDocs title='Error'
                    code={
                        <Async resource={ error } />
                    }
                />
                <CodeDocs title='Success Obj'
                    code={
                        <Async resource={ successObj } />
                    }
                />
                <CodeDocs title='Success Array'
                    code={
                        <Async resource={ successArray } />
                    }
                />
            </div>
        )
    }
}