import React from 'react';
import { useParams } from 'react-router-dom';
import { countryCodeExists, fetchCountryByCode } from './dataset';
import CountryTable from './CountryTable';

function Country() {

    // CountryId passed in as URL parameter: /countries/:countryId
    const { countryId } = useParams();

    // Handle bad country code request
    if (!countryCodeExists(countryId)) {
        return <p>Could not find country with ID: {countryId}</p>;
    }

    // Return a country
    const countryData = fetchCountryByCode(countryId);
    return <CountryTable data={countryData} />;

  }

export default Country;
