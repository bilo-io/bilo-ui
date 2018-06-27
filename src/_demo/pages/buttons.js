import React, { Component }  from 'react'
import {
    Button,
    CodeDocs,
    Icon,
    PropTypeDocs,
    propTypesButton
} from '../../'
import docs from '../../util/proptypes'
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <h3>Buttons</h3>
                <PropTypeDocs
                    docs={docs.Button}
                    propTypes={propTypesButton}
                />
                <CodeDocs title='Primary'
                    code={
                    <ButtonPrimary />
                    }
                    propDocs={docs.Button}
                    propTypes={propTypesButton}
                />
                <CodeDocs title='Hollow' code={
                    <ButtonHollow />
                } />
                <CodeDocs title='Links' code={
                    <ButtonLinks />
                    } />
                <CodeDocs title='Rounded' code={
                    <ButtonRounded />
                    } />
                <CodeDocs title='Filled' code={
                    <ButtonFilled />
                }/>
            </div>
        )
    }
}

export const ButtonPrimary = (props) => <div>
        <Button className='primary' onClick={() => alert('Clicked primary button')}>
            Primary
        </Button>
        <Button className='secondary' onClick={() => alert('Clicked secondary button')}>
            Secondary
        </Button>
        <Button className='warning' onClick={() => alert('Clicked warning button')}>
            Warning
        </Button>
        <Button className='danger' onClick={() => alert('Clicked warning button')}>
            Danger
        </Button>
    </div>
export const ButtonHollow = (props) => <div>
        <Button className='hollow primary'>
            Primary
        </Button>
        <Button className='hollow secondary'>
            Secondary
        </Button>
        <Button className='hollow warning'>
            Warning
        </Button>
        <Button className='hollow danger'>
            Danger
        </Button>
    </div>
export const ButtonLinks = (props) => <div>
        <Button className='link primary'>
            Primary
        </Button>
        <Button className='link secondary'>
            Secondary
        </Button>
        <Button className='link warning'>
            Warning
        </Button>
        <Button className='link danger'>
            Danger
        </Button>
    </div>

export const ButtonRounded = (props) => <div>
        <Button className='primary rounded'>
            <Icon name='bars' />
        </Button>
        <Button className='secondary rounded'>
            <Icon name='question' />
        </Button>
        <Button className='warning rounded'>
            <Icon name='exclamation' />
        </Button>
        <Button className='danger rounded'>
            <Icon name='trash' />
        </Button>
    </div>
export const ButtonFilled = (props) => <div>
    <Button className='primary filled'>
        <Icon name='microphone' />
    </Button>
    <Button className='filled'>
        This is a full width button
    </Button>
    <Button className='warning filled'>
        The CSS class is 'filled'
    </Button>
    <Button className='danger filled'>
        The CSS class is 'filled'
    </Button>
</div>