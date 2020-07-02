import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CountriesContext from './CountriesContext';

function Search() {

    // Obtain the countries dataset to create a searchable list of countries.
    const countries = useContext(CountriesContext);

    // Transform list of countries from the dataset into a list of <option>
    // tags
    const countriesList = countries
        // Sort countries alphabetically by common name
        .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        // Map each country to an <option> element
        .map(
            country => (
            <option key={country.cca3} value={country.cca3}>
                {country.name.common}
            </option>
        ));

    // react-redux history used to allow form to redirect to the URL of the
    // selected country
    const history = useHistory();

    // User's entered search value managed through state hook.
    const [searchValue, setSearchValue] = useState(); 

    // Update the search value in response to user input
    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    // Redirect to the selected country's URL when the user presses submit
    const handleSubmit = event => {
        history.push(`/countries/${searchValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
                        
            <select id="countries-list" placeholder="Enter a country name..." onChange={handleChange}>
                {countriesList}
            </select>

            <input type="submit" value="Submit" />

        </form>
    );
}

export default Search;
