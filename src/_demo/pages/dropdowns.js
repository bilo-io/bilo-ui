import React, { Component }  from 'react'
import {
    CodeDemo,
    Dropdown,
    PropTypeDocs,
    propTypesDropdown
} from '../../' 
import docs from '../../util/proptypes'
export default class Dropdowns extends Component {
    render() {
        return (
            <div>
                <PropTypeDocs
                    docs={docs.Dropdown}
                    propTypes={propTypesDropdown}    
                />
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