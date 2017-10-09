import React from 'react';
import './style.scss'

export const Search = (props) => {
    return (
        <div>
            {props.tag
                ? <label>{props.tag}:{props.selection}</label>
                : null
}
            <SearchInput
                hint={props.placeholder}
                value={props.selection
                ? props.selection
                : props.searchTerm}
                update={(e) => {
                props.searchHandler(props.tag, e.target.value);
            }}/> {props.showSuggestions
                ? <div className='search-results'>
                        {(props.suggestions || []).map((result, idx) => {
                            return <SearchSuggestion
                                key={idx}
                                label={result.formatted_address}
                                onClick={() => {
                                props.selectResult(props.tag, result)
                            }}>
                                {result.formatted_address}
                            </SearchSuggestion>
                        })}
                    </div>
                : null}
        </div>
    )
}

const SearchInput = (props) => {
    return (<input
        type='tex'
        placeholder={props.hint}
        defaultValue={props.value}
        onChange={props.update}/>)
}

const SearchSuggestion = (props) => {
    return (
        <div className='search-item' onClick={props.onClick}>{props.children}</div>
    )
}

export default Search;