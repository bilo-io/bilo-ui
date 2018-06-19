import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components';
import { withInfo } from '@storybook/addon-info';
import { story } from '../../util/storybook'


import {
  ButtonPrimary,
  ButtonHollow,
  ButtonLinks,
  ButtonRounded,
  ButtonFilled
} from './buttons'
storiesOf('Button', module)
  .add('primary',story('what is this anyway?', () => <div>
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
  </div>))

  .add('hollow', story('hello',() => <ButtonHollow />))
  .add('link', () => <ButtonLinks />)
  .add('rounded', () => <ButtonRounded />)
  .add('filled', () => <ButtonFilled />)