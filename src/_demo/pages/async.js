import React, { Component } from 'react'
import {
    Async,
    CodeDocs,
    InfoPanel
} from 'components'

console.log({
    Async,
    CodeDocs,
    InfoPanel
})

export class AsyncDemo extends Component {
    render () {
        return <div>
            <h1>Info Panel</h1>
            <CodeDocs
                title='InfoPanel'
                ComponentClass={ InfoPanel }
                code={
                    <div>
                        <InfoPanel
                            status='info'
                            title='Info'
                            submitText='Accept'
                            onSubmit={() => console.log('info callback')}
                        >
                            This is an info message
                        </InfoPanel>
                        <InfoPanel
                            status='success'
                            title='Success'
                            submitText='Awesome'
                            onSubmit={() => console.log('success callback')}
                        >
                            This is a success message
                        </InfoPanel>
                        <InfoPanel
                            status='warning'
                            title='Warning'
                            submitText='Hhhmmm.... Ok'
                            onSubmit={() => console.log('warning callback')}
                        >
                            This is a warning message
                        </InfoPanel>
                        <InfoPanel
                            status='error'
                            title='Error'
                            submitText='Retry'
                            onSubmit={() => console.log('error callback')}
                        >
                            This is an error message
                        </InfoPanel>
                    </div>
                }
            />
            <h1>Async Resources</h1>
            <CodeDocs
                title='Async States'
                ComponentClass={ Async }
                code={
                    <div>
                        <h3>Async.isInit</h3>
                            <Async resource={{
                                isInit: true,
                                data: []
                            }}>
                                Should not show this, because isInit is true, and data is empty
                            </Async>

                        <h3>Async.isLoading</h3>
                        {/* <Async resource={{
                            isLoading: true,
                            data: []
                        }}>
                            Should show spinner, and not this not show this while loading
                        </Async> */}

                        <h3>Async.isSuccess</h3>
                        <Async resource={{
                            isSuccess: true,
                            data: [{ id: 0, name: 'FooBar'}]
                        }}>
                            Should show children, because SUCCESS
                        </Async>

                        <h3>Async.isError</h3>
                        <Async resource={{
                            isError: true,
                            data: [],
                            error: {
                                message: 'This is a default test error message (defaultProps in the <Async /> Component',
                                status: 9001,
                                statusText: 'OVER_NINE_THOUSAND',
                                stack: [
                                    '0: testing the error stack',
                                    '1: should see these list items',
                                    '2: stacked in one way or another'
                                ]
                            }
                        }}>
                            Should not show this while .isError
                        </Async>
                    </div>
                }
            />
        </div>
    }
}

export default AsyncDemo
