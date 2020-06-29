import React from 'react';

function EnglishNameRow({ name }) {

    // Return a table row with the provided country name

    const row =  (
        <tr>
            <td>Official Name (In English)</td>
            <td>{name}</td>
        </tr>
    );

    // Only render the component if a name was provided
    return name ? row : null;

}

export default EnglishNameRow;
