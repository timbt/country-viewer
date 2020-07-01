import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from './CountriesContext';


function Search() {

    // Obtain the countries dataset to create a searchable list of countries.
    const countries = useContext(CountriesContext);

    // react-redux history used to allow form to redirect to the URL of the
    // selected country
    const history = useHistory();

    // User's entered search value managed through state hook.
    const [searchValue, setSearchValue] = useState(); 

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = event => {
        history.push(`/countries/${searchValue}`);
    };


    return (
        <form onSubmit={handleSubmit}>

            <label>Country Code:
                <input type="search" list="countries-list" onChange={handleChange} />
            </label>
            
            <datalist id="countries-list">
                <option value="CAN">Canada</option>
                <option value="USA">United States</option>
                <option value="MEX">Mexico</option>
            </datalist>

            <input type="submit" value="Submit" />
            
        </form>
    );
}

export default Search;
