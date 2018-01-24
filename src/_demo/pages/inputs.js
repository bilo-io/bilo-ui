import React, { Component } from 'react'
import {If, Button, Icon, Loader, LoaderType} from '../../components';
import CodeDemo from '../../components/code-demo'
import { Slider } from '../../components/Slider'
import { MultiSlider } from '../../components/MultiSlider'
import { Input } from '../../components/Input'

export default class Inputs extends Component {
    state = {
        radio: {
            selection: 'radio 1'
        }
    }
    handleRadioOptionChange = (e) => {
        this.setState({
            radio: {
                selection: e.target.value
            }
        })
    }
    render() {
        const { radio } = this.state;
        return (
            <div className='ws-card'>
                <h2>Inputs</h2>
                <CodeDemo title={`Ranges`} code={ 
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
                <CodeDemo title={`Basic`} code={ 
                    <div>
                        <Input type='text' label='text' />
                        <Input type='number' label='number' />
                        <Input type='email' label='email' />
                        <Input type='password' label='password' />
                        <Input type='tel' label='tel' />
                    </div> 
                }/>
                <CodeDemo title={`Dates`} code={
                    <div>
                        <Input type='date' label='date' />
                        <Input type='time' label='time' />
                        <Input type='datetime' label='datetime-local' />
                    </div>
                }/>
                <CodeDemo title={`Other`} code={
                    <div>
                        <Input type='color' label='color' />
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
                    </div>
                }/>
                <CodeDemo title={`Radio`} code={
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