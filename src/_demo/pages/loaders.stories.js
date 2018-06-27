import React from 'react'
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Loaders', module)
  .add('simple info',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Button>Click Here</Button>
      ~~~

    `)(() =>
      // <Component>Click the "?" mark at top-right to view the info.</Component>
      <div>Hello</div>
    )
  )