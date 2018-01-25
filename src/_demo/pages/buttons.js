import React, { Component }  from 'react'
import Button from '../../components/button'
import CodeDemo from '../../components/CodeDemo'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <h3>Buttons</h3>
                <CodeDemo title='Primary' code={
                    <div>
                        <Button className='primary' onClick={() => alert('Clicked primary button')}>
                            Primary
                        </Button>
                        <Button className='secondary' onClick={() => alert('Clicked secondary button')}>
                            Secondary
                        </Button>
                        <Button className='warning' onClick={() => alert('Clicked warning button')}>
                            Warning
                        </Button>
                    </div>
                }/>
                <CodeDemo title='Hollow' code={
                    <div>
                        <Button className='hollow primary'>
                            Primary
                        </Button>
                        <Button className='hollow secondary'>
                            Secondary
                        </Button>
                        <Button className='hollow warning'>
                            Warning
                        </Button>
                    </div>
                }/>
                <CodeDemo title='Links' code={
                    <div>
                        <Button className='link primary'>
                            Primary
                        </Button>
                        <Button className='link secondary'>
                            Secondary
                        </Button>
                        <Button className='link warning'>
                            Warning
                        </Button>
                    </div>
                }/>
            </div>
        )
    }
}

