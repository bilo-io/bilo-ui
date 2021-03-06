import React, { Component }  from 'react'
import {
    CodeDocs,
    Dropdown,
    PropTypeDocs,
    propTypesDropdown
} from '../../' 
import docs from '../../util/proptypes'
export default class Dropdowns extends Component {
    render() {
        return (
            <div>
                <h2>Dropdowns</h2>
                <PropTypeDocs
                    docs={docs.Dropdown}
                    propTypes={propTypesDropdown}    
                />
                <CodeDocs title='basic' code={
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