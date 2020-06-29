import React from 'react';

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

export default LanguagesRow;
