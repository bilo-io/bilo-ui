export default {
    propTypes: {
        CodeDemo: {
            isOpen: 'Determines whether the Component is expanded/visible.',
        },
        Icon: {
            isOpen: 'Determines whether the Component is expanded/visible.',
            color: 'The color of the icon',
            className: 'The classes to apply',
            style: 'Inline css styling to apply',
            size: 'The font-awesome size (e.g. lg | 2x | 3x | 4x | 5x )',
            name: 'The font-awesome icon name (e.g. camera-retro)',
            transform: 'The font-awesome transform (e.g. flip-vertical | rotate-90)',
            onClick: 'A callback for when the icon is clicked: ( (e) => { ... })'
        }
    }
}