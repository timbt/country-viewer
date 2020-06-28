import { countryCodeExists, fetchCountryByCode } from './dataset';

// Tests for countryCodeExists
test('countryCodeExists() returns true for existing country code', () => {
    expect(countryCodeExists('CAN')).toBe(true);
});

test('countryCodeExists() normalizes a malformed country code', () => {
    expect(countryCodeExists('   cann ')).toBe(true);
});

test('countryCodeExists() returns false for a non-existent country code', () => {
    expect(countryCodeExists('ZZZ')).toBe(false);
});

// Tests for fetchCountryByCode
test('fetchCountryByCode() returns a country from the world-countries dataset', () => {
    let country = fetchCountryByCode('CAN');
    expect(country.name.common).toBe('Canada');
});

test('fetchCountryByCode() throws error for non-existent country code', () => {
    expect( (() => fetchCountryByCode('ZZZ')) ).toThrow();
});
