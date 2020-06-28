import React from 'react';
import { useParams } from 'react-router-dom';
import { countryCodeExists, fetchCountryByCode } from './dataset';

function Country() {

    // CountryId passed in as URL parameter: /countries/:countryId
    const { countryId } = useParams();

    // Handle bad country code request
    if (!countryCodeExists(countryId)) {
        return <p>Could not find country with ID: {countryId}</p>;
    }

    // Return a country
    const countryData = fetchCountryByCode(countryId);
    return <p>You requested {countryData.name.common}.</p>

  }

export default Country;
