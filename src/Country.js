import React from 'react';
import { useParams } from 'react-router-dom';
import worldCountries from 'world-countries';

function findCountry(countries, cca3) {
    /* 
     * Search a list of countries conforming to the world-countries dataset
     * (https://github.com/mledoze/countries) and return the country with a
     * matching CCA3 ID.
     * */

    for (let country of countries) {
        if (country.cca3 === cca3.toUpperCase()) {
            // Country found in dataset
            return country;
        }
    }

    // Country not found in dataset
    throw new Error(
        `Country with CCA3 code ${cca3} not found in dataset.`
    );
}

function Country() {

    // CountryId passed in as URL parameter: /countries/:countryId
    const { countryId } = useParams();

    let country = {};
    // Return the requested country or render an error message if it can't
    // be found.
    try {
        country = findCountry(worldCountries, countryId);
    }  catch(e) {
        return <p>Error: {e.message}</p>
    }
  
    return(
    <p>You requested: {country.name.common}</p>
    );
  }

export default Country;
