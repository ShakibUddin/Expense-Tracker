import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBox = () => {
    let [searchText, setsearchText] = useState("");
    function searchSomething(e, searchText) {
        if (e.keyCode === 13) {
            console.log(searchText);
        }
    }
    return (
        <Form.Control className="my-2 p-2" required maxLength="20" type="text" placeholder="Search Something" value={searchText} onChange={e => setsearchText(e.target.value)} onKeyUp={(e) => { searchSomething(e, searchText) }} />
    );
};

export default SearchBox;