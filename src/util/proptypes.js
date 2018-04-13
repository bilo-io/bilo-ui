export default {
    AppBody : {
        propTypes: {
            className: 'PropTypes.string',
            style: 'PropTypes.object'
        }
    },
    AppSidenav : {
        propTypes: {
            style: 'PropTypes.string',
            className: 'PropTypes.string',
            isOpen: 'PropTypes.bool',
            fromRight: 'PropTypes.bool'
        }
    },
    AppToaster : {
        propTypes: {
            toast: 'PropTypes.object'
        }
    },
    AppTopBar : {
        propTypes: {
            style: 'PropTypes.object',
            className: 'PropTypes.string'
        }
    },
    Audio : {
        propTypes: {
            src: 'PropTypes.string',
            style: 'PropTypes.object',
            width: 'PropTypes.string',
            height: 'PropTypes.string',
            type: 'PropTypes.string'
        }
    },
    Badges : {
        propTypes: {
            closeable: 'PropTypes.bool',
            hint: 'PropTypes.string',
            items: 'PropTypes.array',
            onChange: 'PropTypes.func',
            onClose: 'PropTypes.func'
        }
    },
    Button : {
        propTypes: {
            style: 'PropTypes.object',
            className: 'PropTypes.string',
            onClick: 'PropTypes.func'
        }
    },
    ButtonGroup : {
        propTypes: {
            alignment: 'PropTypes.string',
            className: 'PropTypes.string',
            style: 'PropTypes.object'
        }
    },
    Card : {
        propTypes: {
            className: 'PropTypes.string',
            depth: 'PropTypes.string',
            onClick: 'PropTypes.func',
            style: 'PropTypes.object'
        }
    },
    Catch : {
        propTypes: {
            error: 'PropTypes.string',
            hasError: 'PropTypes.bool',
            info: 'PropTypes.string'
        }
    },
    CodeDemo : {
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
            label: 'PropTypes.string',
            options: 'PropTypes.array',
            onChange: 'PropTypes.func'
        }
    },
    Icon : {
        propTypes: {
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
            className: 'PropTypes.string',
            defaultValue: 'PropTypes.string',
            label: 'PropTypes.string',
            max: 'PropTypes.number',
            min: 'PropTypes.number',
            onChange: 'PropTypes.func',
            placeholder: 'PropTypes.string',
            type: 'PropTypes.string',
            style: 'PropTypes.object'
        }
    },
    List : {
        propTypes: {
            items: 'PropTypes',
            onClick: 'PropTypes',
            multiple: 'PropTypes',
            hasIcons: 'PropTypes',
            scroll: 'PropTypes'
        }
    },
    Loader : {
        propTypes: {
            type: 'PropTypes.string',
            loading: 'PropTypes.bool'
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
            markdown: 'PropTypes.string',
            url: 'PropTypes.string'
        }
    },
    MultiSlider : {
        propTypes: {
            min: 'PropTypes.number',
            max: 'PropTypes.number',
            step: 'PropTypes.number',
            defaultRange: 'PropTypes.array',
            defaultValue: 'PropTypes.number',
            onChange: 'PropTypes.func',
            className: 'PropTypes.object',
            style: 'PropTypes.object'
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
            onChange: 'PropTypes.func',
            placeholder: 'PropTypes.string',
            query: 'PropTypes.string',
            search: 'PropTypes.func',
            searchState: 'PropTypes.object',
            select: 'PropTypes.func',
            selection: 'PropTypes.object',
            style: 'PropTypes.string',
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
            onChange: 'PropTypes.func',
            step: 'PropTypes.number',
            style: 'PropTypes.object'
        }
    },
    Switch : {
        propTypes: {
            isRound: 'PropTypes.bool',
            isChecked: 'PropTypes.bool',
            onChange: 'PropTypes.func'
        }
    },
    Time : {
        propTypes: {}
    },
    Toaster : {
        propTypes: {
            toasts: 'PropTypes.array'
        }
    },
    Tree : {
        propTypes: {
            data: 'PropTypes.object',
            depth: 'PropTypes.number',
            onClick: 'PropTypes.func',
            index: 'PropTypes.number',
            path: 'PropTypes.array'
        }
    },
    Video : {
        propTypes: {
            src: 'PropTypes.string',
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