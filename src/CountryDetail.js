import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {

    // CountryId passed in as URL parameter: /countries/:countryId
    const { countryId } = useParams();
  
    return(
    <p>You requested: {countryId}</p>
    );
  }

export default CountryDetail;
