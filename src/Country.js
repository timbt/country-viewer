import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CountryTable from './CountryTable';
import CountriesContext from './CountriesContext';

function normalize(countryCode) {

  /* Attempt to normalize a provided string as an uppercase ISO 3166-1
   * alpha-3 code.
   */

  return countryCode
      .trim()
      .slice(0,3)
      .toUpperCase();

}

function countryCodeExists(countries, countryCode) {

  /* Returns true if the provided string matches an ISO 3166-1 alpha-3 code
   * (country.name.cca3) found in the dataset. Returns false otherwise.
   */

  for (let country of countries) {
      if (country.cca3 === normalize(countryCode)) {
          // Found a matching country
          return true;
      }
  }

  // No match found
  return false;

}

function fetchCountryByCode(countries, countryCode) {
    
  /* Returns an individual country from the world-countries dataset */

  for (let country of countries) {
      if (country.cca3 === normalize(countryCode)) {
          // Return found country object
          return country;
      }
  }

  // No country with matching code found - throw an error
  throw new Error(
      `Country with ISO 3166-1 alpha-3 code ${normalize(countryCode)} could not be found.`
  );

}


function Country() {

    // CountryId passed in as URL parameter: /countries/:countryId
    const { countryId } = useParams();

    // Obtain countries dataset from countries context provider
    const countries = useContext(CountriesContext);
 
    // Handle bad country code request
    if (!countryCodeExists(countries, countryId)) {
        return <p>Could not find country with ID: {countryId}</p>;
    }

    // Return a country
    const countryData = fetchCountryByCode(countries, countryId);
    return <CountryTable data={countryData} />;

  }

export default Country;
