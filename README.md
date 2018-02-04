# bilo-ui

This is an [React](https://reactjs.org/) component library used for frontend web development.

Demo available here: [https://bilo-io.github.io/bilo-ui](https://bilo-io.github.io/bilo-ui)

## Get started

- Installation

```
npm install bilo-ui --save-dev
```

- Example Usage:
```jsx
import { Button, Card, If } from 'bilo-ui'

export const MyComponent = (props) => (
    <div>
        <Card className='padded'>
            <If isTrue={true}>
                <Button className='primary' onClick={
                        () => alert('bilo-ui button clicked')
                }>
                    Show dialog
                </Button>
            </If>
            <If isTrue={false}>
                <Button className='warning' onClick={
                    () => alert('bilo-ui button clicked')
                }>
                    Button should be invisible
                </Button>
            </If>
        </Card>
    </div>
)
```

## Development

1) Get the library onto your local machine
- `git clone https://github.com/bilo-io/bilo-ui.git`
- `cd ./bilo-ui`
- `npm install`

2) Create symlinks

- `npm link`
- `npm run dev`

> To preview your changes, add this command:
- `npm run dev:demo` ... preview running on [http://localhost:8080](http://localhost:8080)

>NOTE: To link to your the local copy of `bilo-ui`, run `npm link bilo-ui` in your project


