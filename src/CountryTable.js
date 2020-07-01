import React from 'react';
import EnglishNameRow from './EnglishNameRow';
import LanguagesRow from './LanguagesRow';
import CapitalCitiesRow from './CapitalCitiesRow';

function CountryTable({ data }) {

    return (
        <table>
            <tbody>
                <EnglishNameRow name={data.name.official} />
                <LanguagesRow languages={data.languages} />
                <CapitalCitiesRow capitalCities={data.capital} />
            </tbody>
        </table>
    );

}

export default CountryTable;
