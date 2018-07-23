# bilo-ui

A [React](https://reactjs.org/) component library for frontend web dev.

#### [Live Demo](https://bilo-io.github.io/bilo-ui)

## Get started

- Installation

```
npm install bilo-ui --save-dev
```

- Example Usage:
```jsx
import { Button, Card, If } from 'bilo-ui'

export const MyComponent = (props) => (
    <Card className='padded'>
        <If truthy={true}>
            <Button className='primary' onClick={
                    () => alert('bilo-ui button clicked')
            }>
                Show dialog
            </Button>
        </If>
        <If truthy={false}>
            <Button className='warning' onClick={
                () => alert('bilo-ui button clicked')
            }>
                Button should be invisible
            </Button>
        </If>
    </Card>
)
```

## Setting up

- `git clone http://github.com/bilo-io/bilo-ui`
- `cd ./bilo-ui`
- `yarn`
- `yarn dev`
- `yarn dev:docs`

> `dev:docs` recompiles the preview of the package, run on [http://localhost:3030](http://localhost:3030)
> `dev` recompiles the package `bilo-ui` after each edit, useful when linking this package as a dependency locally

## Symlinking

- `yarn link` in this repository
- `yarn dev`

>NOTE: To link to your the local copy of `bilo-ui`, run `yarn link bilo-ui` in your project

## Building & Releasing

- `yarn build`
- `yarn build:docs`
- `yarn deploy`

> `yarn build:all` builds both the preview (docs) and the npm package
>
> TODO: semver bumping for release process

