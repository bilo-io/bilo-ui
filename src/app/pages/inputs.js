import React, { Component } from 'react'
import {If, Button, Icon, Loader, LoaderType} from '../../components';
import CodeDemo from '../../components/code-demo'
import { Slider } from '../../components/Slider'
import { MultiSlider } from '../../components/MultiSlider'
import { Input } from '../../components/Input'

export default class Inputs extends Component {
    render() {
        const rangeInputs = <div>
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
        const textInputs = <div>
                <Input type='text' 
                    label='text' />
                <Input type='number' label='number' />
                <Input type='email' label='email' />
                <Input type='password' label='password' />
                <Input type='tel' label='tel' />
            </div>
        const dateTimeInputs = <div>
                <div>
                    <label>date</label>
                    <input type='date' />
                </div> 
                <div>
                    <label>time</label>
                    <input type='time' />
                </div>
                <div>
                    <label>datetime</label>
                    <input type='datetime-local' />
                </div>
            </div>
        const otherInputs = <div>
                    <div>
                        <label>color</label>
                        <input type='color' />
                    </div>
                    <div>
                        <label>range</label>
                        <input type='range' />
                    </div>

                    <div>
                        <label>checkboxes</label>
                        <input type='checkbox' />
                        <input type='checkbox' />
                        <input type='checkbox' />
                    </div>

                    <div>
                        <label>radio buttons</label>
                        <input type='radio' />
                        <input type='radio' />
                        <input type='radio' />
                    </div>
            </div>
        return (
            <div className='ws-card'>
                <h2>Inputs</h2>
                <CodeDemo title={`Ranges`}code={ rangeInputs } />
                <CodeDemo title={`Basic`}code={ textInputs } />
                <CodeDemo title={`Dates`}code={ dateTimeInputs }/>
                <CodeDemo title={`Other`}code={ otherInputs }/>
            </div>
        )
    }
}