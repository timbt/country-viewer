import countries from 'world-countries';

function normalize(countryCode) {

    /* Attempt to normalize a provided string as an uppercase ISO 3166-1
     * alpha-3 code.
     */

    return countryCode
        .trim()
        .slice(0,3)
        .toUpperCase();

}

export function countryCodeExists(countryCode) {

    /* Returns true if the provided string matches an ISO 3166-1 alpha-3 code
     * (country.name.cca3) found in the dataset. Returns false otherwise.
     */

    for (let country of countries) {
        if (country.cca3 === normalize(countryCode)) {
            // Found a matching country
            return true;
        }
    }

    // No match found
    return false;

}

export function fetchCountryByCode(countryCode) {
    
    /* Returns an individual country from the world-countries dataset */

    for (let country of countries) {
        if (country.cca3 === normalize(countryCode)) {
            // Return found country object
            return country;
        }
    }

    // No country with matching code found - throw an error
    throw new Error(
        `Country with ISO 3166-1 alpha-3 code ${normalize(countryCode)} could not be found.`
    );

}
