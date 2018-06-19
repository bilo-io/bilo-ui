import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components';
import {
  InputBasic,
  InputDates,
  InputOther,
  InputRadio,
  InputRanges,
  InputSwitch
} from './inputs'

storiesOf('Inputs', module)
  .add('ranges', () => <InputRanges />)
  .add('basic', () => <InputBasic />)
  .add('dates', () => <InputDates />)
  .add('radio', () => <InputRadio />)
  .add('switch', () => <InputSwitch />)
  .add('other', () => <InputOther />)