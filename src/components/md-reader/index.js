import React from 'react';
import Loader, {LoaderType} from '../../components/loader';
require('./style.scss');
var axios = require('axios');
var marked = require('marked');
var highlight = require('highlight.js');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: (code) => {
        return highlight
            .highlightAuto(code)
            .value;
    }
})

export default class MDReader extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.checkProps(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.checkProps(nextProps);
    }
    checkProps(props) {
        const { markdown, url } = props;
        console.log('receiving props', props, this.props)
        this.setState({
            ...this.state,
            markdown,
            url
        }, () => {
            props.url != this.props.url
                ? this.fetchMD(props.url)
                : null;
            props.markdown != this.props.markdown
                ? this.processMD(props.markdown)
                : null;
        });
    }
    fetchMD(url) {
        this.loading = true;
        if (!url) {
            console.warn('no url specified!: ', url)
            return;
        }
        console.log('fetching Markdown: ', this.props.url);
        axios
            .get(url)
            .then((response) => {
                this.processMD(response.data);
            })
            .catch((e) => {
                console.warn(e),
                console.log(this.state)
            });
    }
    processMD(markdown) {
        // get headings:
        console.log('processing markdown', markdown)
        let lines = markdown
            .split('\n')
            .filter(line => line.substr(0, 1) === '#');
        this.setState({
            ...this.state,
            loading: false,
            markdown,
            lines,
            headings: lines.map(line => line.substr(2, line.length))
        }, () => this.convertMDtoHTML(markdown)
        )
        // convert & highlight
    }
    convertMDtoHTML(markdown) {
        this.setState({
            ...this.state,
            html: marked(markdown)
        }, () => {
            this.loading = false;
            console.log('markdown HTML: ', this.state.html)
        });
    }
    render() {
        return this.state
            ? (this.loading
                ? <Loader type={LoaderType.RAINBOW}/>
                : (
                    <div className='markdown-wrapper'>
                        {/* {this.props.showHeadings
                            ? <div className='markdown-nav'>
                                    {(this.state.headings || []).map((heading) => {
                                        return <div key={heading}>{heading}</div>
                                    })}
                                </div>
                            : null
                        } */}
                        <div className='markdown-container'>
                            {this.state.html
                                ? <div
                                    className='markdown'
                                    dangerouslySetInnerHTML={{
                                        __html: this.state.html
                                    }}></div>
                                : 'Could not process markdown file. Raw content:\n' + this.state.markdown}
                        </div>
                    </div>
                ))
            : null;
    }
}