import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = () => {
    let [searchText, setsearchText] = useState("");
    function searchSomething(e, searchText) {
        if (e.keyCode === 13) {
            console.log(searchText);
        }
    }
    return (
        <input className="search-box" maxLength="20" type="text" name="searchText" placeholder="Search Something" value={searchText} onChange={e => setsearchText(e.target.value)} onKeyUp={(e) => { searchSomething(e, searchText) }} />
    );
};

export default SearchBox;