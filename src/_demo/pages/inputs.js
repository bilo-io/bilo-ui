import React, { Component } from 'react'
import {
    Button,
    Card,
    Icon,
    If,
    Input,
    Loader,
    LoaderType,
    MultiSlider,
    Slider,
    Switch,
    PropTypeDocs,
    propTypesInput
} from '../../components'
import Dropdowns from './dropdowns'
import docs from '../../util/proptypes'
import CodeDocs from '../../components/code-docs'

export default class Inputs extends Component {
    state = {
        radio: {
            selection: 'radio 1'
        },
        isChecked: true
    }
    handleRadioOptionChange = (e) => {
        e.preventDefaults()
        this.setState({
            radio: {
                selection: e.target.value
            }
        })
    }
    render() {
        const { radio, isChecked } = this.state;
        return (
            <div className='ws-card'>
                <Dropdowns />    
                
                <h2>Inputs</h2>
                <PropTypeDocs
                    docs={docs.Input}
                    propTypes={propTypesInput}
                />

                <CodeDocs title={`Ranges`} code={ 
                    <div>
                        <Slider 
                            min={0}
                            max={100}
                            defaultValue={50}
                            onChange={ (e) => console.log(e.target.value)} />    
                        {/* <MultiSlider 
                            min={0}
                            max={100}
                            defaultRange={[40,60]}
                            onChange={ (e) => console.log(e.target.value)} />             */}
                    </div>
                }/>
                <CodeDocs title={`Basic`} code={ 
                    <div>
                        <Input
                            type='text'
                            label='text'
                            defaultValue='dummy text'/>
                        <Input 
                            type='number' 
                            label='number'
                            defaultValue='12345' />
                        <Input 
                            type='email' 
                            label='email'
                            defaultValue='user@email.com' />
                        <Input 
                            type='password' 
                            label='password'
                            defaultValue='somepasswordtext' />
                        <Input 
                            type='tel' 
                            label='tel'
                            defaultValue='+27214240494' />
                    </div> 
                }/>
                
                <CodeDocs title={`Dates`} code={
                    <div>
                        <Input type='date' label='date' />
                        <Input type='time' label='time' />
                        <Input type='datetime' label='datetime-local' />
                    </div>
                }/>
                <CodeDocs title={`Other`} code={
                    <div>
                        <Input type='color' label='color' />
                        <br />
                        <div>
                            <label>checkboxes</label>
                            <label>
                                <input type='checkbox' />
                                checkbox 1
                            </label>
                            <label>
                                <input type='checkbox' />
                                checkbox 2
                            </label>
                            <label>
                                <input type='checkbox' />
                                checkbox 3
                            </label>
                        </div>
                        <br />
                        <div>
                        </div>
                    </div>
                } />
                <CodeDocs title='Switches' code={
                    <div>
                        <Switch />
                        <Switch
                            isRound
                            isChecked={isChecked}
                            style={{
                                width: 'auto'
                            }}
                            onChange={(e) => this.setState({ isChecked: !isChecked})}
                            />
                        <Switch
                            isRound
                            isChecked={isChecked}
                            title={'custom switch'}
                            onChange={(e) => this.setState({ isChecked: !isChecked})}
                        />
                    </div>    
                }/>
                <CodeDocs title={`Radio`} code={
                    <div
                            style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-between'
                        }}>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="radio 1"
                                    checked={radio.selection === 'radio 1'}
                                    onChange={this.handleRadioOptionChange}/>
                                <span><Icon name='text-width'/>&nbsp;Text</span>
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="radio 2"
                                    checked={radio.selection === 'radio 2'}
                                    onChange={this.handleRadioOptionChange}/>
                                <span><Icon name='picture-o'/>&nbsp;Image</span>
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="radio 3"
                                    checked={radio.selection === 'radio 3'}
                                    onChange={this.handleRadioOptionChange}/>
                                <span><Icon name='music'/>&nbsp;Audio</span>
                            </label>
                        </div>
                    </div>
                }/>
            </div>
        )
    }
}