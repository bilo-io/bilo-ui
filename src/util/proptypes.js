const style = 'An object, inline styling to be applied to the component'
const className = 'A string, css classes to be appended to the existing'
const onClick = 'A callback to trigger what happens after clicking the component: () => {}'
const onChange = 'A callback to trigger what happens after the component changes: (e) => {}'

export default {
    AppBody : {
        propTypes: {
            className,
            style
        }
    },
    AppSidenav : {
        propTypes: {
            style: 'PropTypes.string',
            className: 'PropTypes.string',
            isOpen: 'A boolean to show, hide the sidenav component',
            fromRight: 'Dictates whether the sidenav should open from the right (defaults to the left)'
        }
    },
    AppToaster : {
        propTypes: {
            toast: 'PropTypes.object'
        }
    },
    AppTopBar : {
        propTypes: {
            className,
            style
        }
    },
    Audio : {
        propTypes: {
            src: 'The URL of the audio file',
            className,
            style,
            width: 'The width of the component',
            height: 'The height of the component',
        }
    },
    Badges : {
        propTypes: {
            closeable: 'Whether you can delete the badge',
            hint: 'A placeholder for the badges container, when no badges have been added',
            items: 'The actual badges',
            onChange,
            onClose: 'Callback that happens when you remove a badge'
        }
    },
    Button : {
        propTypes: {
            className,
            style,
            onClick
        }
    },
    ButtonGroup : {
        propTypes: {
            alignment: 'PropTypes.string',
            className,
            style
        }
    },
    Card : {
        propTypes: {
            className,
            depth: 'A number indicating the intensity of the box-shadow (values: [1,2,3,4,5])',
            onClick,
            style
        }
    },
    Catch : {
        propTypes: {
            error: 'PropTypes.string',
            hasError: 'PropTypes.bool',
            info: 'PropTypes.string'
        }
    },
    CodeDocs : {
        propTypes: {
            isOpen: 'Determines whether the Component is expanded/visible.'
        }
    },
    Collapsible : {
        propTypes: {
            label: 'PropTypes.string'
        }
    },
    Dropdown : {
        propTypes: {
            label: 'The label for the dropdown (e.g. the name of the category of items)',
            options: 'The actual items to appear in the dropdown',
            onChange
        }
    },
    Icon : {
        propTypes: {
            animation: 'A font-awesome animation (e.g. "spin")',
            isOpen: 'Determines whether the Component is expanded/visible.',
            color: 'The color of the icon',
            className: 'The classes to apply',
            style: 'Inline css styling to apply',
            size: 'The font-awesome size (e.g. lg | 2x | 3x | 4x | 5x )',
            name: 'The font-awesome icon name (e.g. camera-retro)',
            transform: 'The font-awesome transform (e.g. flip-vertical | rotate-90)',
            onClick: 'A callback for when the icon is clicked: ( (e) => { ... })'
        }
    },
    If : {
        propTypes: {
            isTrue: 'PropTypes.bool.isRequired'
        }
    },
    Input : {
        propTypes: {
            className,
            defaultValue: 'PropTypes.string',
            value: 'PropTypes.string',
            label: 'PropTypes.string',
            max: 'For range inputs the maximum number',
            min: 'For range inputs the minimum number',
            onChange,
            placeholder: 'The text indicating what should be entered',
            type: 'The type of input (e.g. "text", "number", "password", etc.)',
            style
        }
    },
    List : {
        propTypes: {
            items: 'PropTypes',
            onClick,
            multiple: 'To indicate whether multiple items in the list are selectable',
            hasIcons: 'Dictates whether icons should be rendered for each item in the lest',
            scroll: 'Dictates whether the list will scroll (in this case it will also get a max height)'
        }
    },
    Loader : {
        propTypes: {
            type: 'A string to choose one of the default loaders (import LoaderType and use as "LoaderType.SPINNER")',
            loading: 'A boolean that determines wether to show the loader'
        }
    },
    Map : {
        propTypes: {
            center: 'PropTypes.array',
            theme: 'PropTypes.string',
            zoom: 'PropTypes.number'
        }
    },
    MDReader : {
        propTypes: {
            markdown: 'A string of markdown to render',
            url: 'A link to the markdown file, which will be downloaded and rendered'
        }
    },
    MultiSlider : {
        propTypes: {
            min: 'PropTypes.number',
            max: 'PropTypes.number',
            step: 'PropTypes.number',
            defaultRange: 'PropTypes.array',
            defaultValue: 'PropTypes.number',
            onChange,
            className,
            style
        }
    },
    Now : {
        propTypes: {
            date: 'PropTypes.object'
        }
    },
    PropTypeDocs : {
        propTypes: {}
    },
    Search : {
        propTypes: {
            onChange,
            placeholder: 'PropTypes.string',
            query: 'PropTypes.string',
            search: 'PropTypes.func',
            searchState: 'PropTypes.object',
            select: 'PropTypes.func',
            selection: 'PropTypes.object',
            style,
            suggestions: 'PropTypes.array',
            suggestionsOn: 'PropTypes.bool',
            tag: 'PropTypes.string',
        }
    },
    Select : {
        propTypes: {
            multiple: 'PropTypes.bool'
        }
    },
    Slider : {
        propTypes: {
            className: 'PropTypes.object',
            defaultValue: 'PropTypes.number',
            max: 'PropTypes.number',
            min: 'PropTypes.number',
            onChange,
            step: 'PropTypes.number',
            style
        }
    },
    Switch : {
        propTypes: {
            isRound: 'PropTypes.bool',
            isChecked: 'PropTypes.bool',
            onChange
        }
    },
    Time : {
        propTypes: {}
    },
    Toaster : {
        propTypes: {
            toasts: 'An array of toasts to be rendered'
        }
    },
    Tree : {
        propTypes: {
            data: 'PropTypes.object',
            depth: 'A number indiating the level of nesting',
            onClick,
            index: 'The index of the specific tree node amongs it\'s siblings',
            path: 'A path to the tree node, using the index of each element, starting from the root'
        }
    },
    Video : {
        propTypes: {
            src: 'Url to the file',
            width: 'PropTypes.string',
            height: 'PropTypes.string',
            type: 'PropTypes.string'
        }
    },
    Youtube : {
        propTypes: {
            width: 'PropTypes.string',
            height: 'PropTypes.string',
            videoId: 'PropTypes.string',
            autoPlay: 'PropTypes.bool'
        }
    }
}