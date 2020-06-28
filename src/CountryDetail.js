import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {

    const { countryId } = useParams();
  
    return(
    <p>You requested: {countryId}</p>
    );
  }

export default CountryDetail;
