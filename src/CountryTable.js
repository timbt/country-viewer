import React from 'react';

function EnglishNameRow({ name }) {

    // Return a table row with the provided country name

    return (
        <tr>
            <td>Official Name (In English)</td>
            <td>{name}</td>
        </tr>
    );

}

function LanguagesRow({ languages }) {
    
    // Extract names of languages from provided languages object
    let languageList = Object.values(languages);

    // Return a table row with a comma seperated list of languages
    return (
        <tr>
            <td>Official Languages</td>
            <td>{languageList.join(', ')}</td>
        </tr>
    );

}

function CountryTable({ data }) {

    return (
        <table>
            <EnglishNameRow name={data.name.official} />
            <LanguagesRow languages={data.languages} />
        </table>
    );

}

export default CountryTable;
