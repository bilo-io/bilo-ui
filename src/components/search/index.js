import React from 'react';
import style from './style.scss'

export const Search = (props) => {
    return (
        <div>
            {props.tag.length > 0
                ? <label>{props.tag} {props.selection}</label>
                : null
            }
            <SearchInput
                hint={props.placeholder}
                value={props.selection
                ? props.selection
                : props.query}
                update={(e) => {
                    props.search(props.tag, e.target.value);
                }} /> {props.suggestionsOn
                    ? <div className={style.searchResults}>
                        {(props.suggestions || []).map((result, idx) => {
                            return <SearchSuggestion
                                key={idx}
                                label={result.label}
                                onClick={() => {
                                    props.select(props.tag, result)
                                }}>
                                {result.label}
                            </SearchSuggestion>
                        })}
                    </div>
                    : null}
        </div>
    )
}

const SearchInput = (props) => {
    return (<input
        className={props.className}    
        type='tex'
        placeholder={props.hint}
        value={props.value}
        onChange={props.update}/>)
}

const SearchSuggestion = (props) => {
    return (
        <div className={'search-item'} onClick={props.onClick}>{props.children}</div>
    )
}

export default Search;