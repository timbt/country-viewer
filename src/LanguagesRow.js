import React from 'react';

function LanguagesRow({ languages }) {
    
    // Extract names of languages from provided languages object
    let languageList = Object.values(languages);

    // Do not render the row if there is no data to display
    if (languageList.length === 0) {
        return null;
    }

    // Set the row's name as singular or plural based on the number of
    // languages provided.
    const rowName = languageList.length === 1 ? 
        'Official Language' : 
        'Official Languages'

    // Return a table row with a comma seperated list of languages
    return (
        <tr>
            <td>{rowName}</td>
            <td>{languageList.join(', ')}</td>
        </tr>
    );

}

export default LanguagesRow;
