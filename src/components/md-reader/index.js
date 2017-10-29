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
    componentWillReceiveProps(nextProps) {
        console.log({nextProps});
        let {markdown, url} = nextProps;
        this.setState({
            ...this.state,
            markdown,
            url
        }, () => {
            nextProps.url
                ? this.fetchMD(nextProps.url)
                : null;
            nextProps.markdown
                ? this.processMD(nextProps.markdown)
                : null;
        });

    }
    fetchMD(url) {
        this.loading = true;
        console.log('Loading: ', this.loading)
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
        let lines = markdown
            .split('\n')
            .filter(line => line.substr(0, 1) === '#');
        console.log({lines});
        this.setState({
            ...this.state,
            markdown,
            lines,
            headings: lines.map(line => line.substr(2, line.length))
        }, () => console.log(this.state))
        // convert & highlight
        this.convertMDtoHTML(markdown);
    }
    convertMDtoHTML(markdown) {
        this.setState({
            ...this.state,
            html: marked(markdown)
        }, () => {
            this.loading = false;
            console.log('Loading: ', this.loading)
            console.log(this.state)
        });
    }
    render() {
        return this.state
            ? (!this.loading
                ? <Loader type={LoaderType.RAINBOW}/>
                : (
                    <div className='markdown-wrapper'>
                        {this.props.showHeadings
                            ? <div className='markdown-nav'>
                                    {(this.state.headings || []).map((heading) => {
                                        return <div key={heading}>{heading}</div>
                                    })}
                                </div>
                            : null
}
                        <div className='markdown-container'>
                            {this.state.html
                                ? <div
                                        className='markdown'
                                        dangerouslySetInnerHTML={{
                                        __html: this.state.html
                                    }}></div>
                                : null}
                        </div>
                    </div>
                ))
            : null;
    }
}