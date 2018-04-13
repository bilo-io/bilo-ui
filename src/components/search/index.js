import React, {Component} from 'react';
import PropTypes from 'prop-types'
import style from './style.scss';

export const propTypesSearch = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    query: PropTypes.string,
    search: PropTypes.func,
    searchState: PropTypes.object,
    select: PropTypes.func,
    selection: PropTypes.object,
    style: PropTypes.string,
    suggestions: PropTypes.array,
    suggestionsOn: PropTypes.bool,
    tag: PropTypes.string,
}
export class Search extends Component {
    static propTypes = {
        ...propTypesSearch
    }
    render() {
        const {
            tag,
            selection,
            style,
            placeholder,
            searchState,
            suggestions,
            query,
            search,
            onChange,
            suggestionsOn,
            select
        } = this.props
        return (
            <div>
                {tag && tag.length > 0
                    ? <label>{tag} {selection}</label>
                    : null
}
                <SearchInput
                    style={style}
                    hint={placeholder}
                    value={selection
                        ? selection
                        : query}
                    update={(e) => {
                        search(tag, e.target.value)
                        onChange(tag, searchState);
                }}/> {suggestionsOn
                    ? <div className={style.searchResults}>
                            {(suggestions || []).map((result, idx) => {
                                return <SearchSuggestion
                                    key={idx}
                                    label={result.label}
                                    onClick={() => {
                                    select(tag, result)
                                }}>
                                    {result.label}
                                </SearchSuggestion>
                            })}
                        </div>
                    : null}
            </div>
        )
    }
}

const SearchInput = (props) => {
    return (<input
        style={props.style}
        className={props.className}
        type='text'
        placeholder={props.hint}
        value={props.value}
        onChange={props.update}/>)
}

const SearchSuggestion = (props) => {
    return (
        <div className={'search-item'} onClick={props.onClick}>{props.children}</div>
    )
}

export class SearchState {
    constructor() {
        this.suggestions = [];
        this.query = [];
    }

    static createEmpty() {
        return new SearchState();
    }
}

export default Search;
