import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components';
import { CardHorizontalAlignment, CardVerticalAlignment } from './cards'

storiesOf('Cards', module)
  .add('vertical alignment', () => (
    <CardVerticalAlignment />
  ))
  .add('horizontal alignment', () => (
    <CardHorizontalAlignment />
  ))
  .add('hello', () => <div>
    <span>hello</span>
  </div>)