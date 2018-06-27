import { withInfo } from '@storybook/addon-info';

export const story = (desc, cb) => {
    return withInfo(desc)( () => cb())
}