import React, { Component }  from 'react'
import CodeDemo from '../../components/code-demo'
import Dropdown from '../../components/dropdown'

export default class Dropdowns extends Component {
    render() {
        return (
            <div>
                <CodeDemo title='dropdowns' code={
                    <Dropdown 
                    onChange={(e) => console.log(e.target.value)}
                    options={[
                        { label: 'first', value: 'first'},
                        { label: 'second', value: 'second'},
                        { label: 'third', value: 'third'}
                    ]}/>
                }/>
            </div>
        )
    }
}