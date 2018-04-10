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

## Setting up

- `git clone http://github.com/bilo-io/bilo-ui` 
- `cd ./bilo-ui`
- `yarn`
- `yarn dev`
- `yarn dev:demo`

> `dev:demo` recompiles the preview of the package, run on [http://localhost:3030](http://localhost:3030)
> `dev` recompiles the package `bilo-ui` after each edit, useful when linking this package as a dependency locally
## Symlinking

- `yarn link` in this repository
- `yarn dev`

>NOTE: To link to your the local copy of `bilo-ui`, run `yarn link bilo-ui` in your project

## Building & Releasing

- `yarn build`
- `yarn build:demo`
- `yarn deploy`

> `yarn build:all` builds both the preview (demo) and the npm package
>
> TODO: semver bumping for release process

