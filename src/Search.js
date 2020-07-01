import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



function Search() {

    const history = useHistory();

    const [searchValue, setSearchValue] = useState(); 

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = event => {
        history.push(`/countries/${searchValue}`);
    };


    return (
        <form onSubmit={handleSubmit} >
            <label>Country Code:
                <input type="search" value={searchValue} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Search;
