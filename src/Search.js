import React, { useContext } from 'react';
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

    // Redirect to the selected country on user input
    const handleChange = event => {
        history.push(`/countries/${event.target.value}`);
    };

    return (                    
        <select 
            id="countries-list"
            placeholder="Enter a country name..."
            onChange={handleChange}
        >
            <option value="" disabled selected>Choose a country...</option>
            {countriesList}
        </select>
    );
}

export default Search;
