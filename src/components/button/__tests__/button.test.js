import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from '../'

describe('Button suite', () => {
    it('renders Button', () => {
        const buttonInstance = mount(
            <Button>
                Test Button 1
        </Button>
        )
        expect(buttonInstance.find('.button')).toBeTruthy()
    })
})