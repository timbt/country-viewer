import React from 'react';
import EnglishNameRow from './EnglishNameRow';
import LanguagesRow from './LanguagesRow';

function CountryTable({ data }) {

    return (
        <table>
            <tbody>
                <EnglishNameRow name={data.name.official} />
                <LanguagesRow languages={data.languages} />
            </tbody>
        </table>
    );

}

export default CountryTable;
