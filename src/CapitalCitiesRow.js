import React from 'react';

function CapitalCitiesRow({ capitalCities }) {
    
    // Row name should be plural if there is more than one capital city
    const rowName = capitalCities.length > 1 ? 
        'Capital Cities' :
        'Capital City'

    // Row data should be 'none' if there are no capital cities, or a comma
    // seperated list otherwise.
    const rowData = (capitalCities.length > 0 && capitalCities[0].length > 0) ?
    capitalCities.join(', ') :
    <em>none</em>

    // Render and return the table row
    return (
        <tr>
            <td>{rowName}</td>
            <td>{rowData}</td>
        </tr>
    );

}

export default CapitalCitiesRow;
