import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from './CountriesContext';


function Search() {

    // Obtain the countries dataset to create a searchable list of countries.
    const countries = useContext(CountriesContext);

    const countriesList = countries.map(country => (
        <option key={country.cca3} value={country.cca3}>
            {country.name.common}
        </option>
    ));

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

            <input 
                type="search"
                list="countries-list"
                placeholder="Enter a country name..."
                onChange={handleChange} 
            />
                        
            <datalist id="countries-list">
                {countriesList}
            </datalist>

            <input type="submit" value="Submit" />

        </form>
    );
}

export default Search;
