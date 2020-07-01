import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Country from './Country';
import worldCountries from 'world-countries';
import CountriesContext from './CountriesContext';

function App() {

  return (

    // Provide countries context to all components
    <CountriesContext.Provider value={worldCountries}>

      {/* Application-wide header */}
      <h1>Country Factbook</h1>
      
      <Router basename="/">
        <Switch>

          {/* Path for when a country has been specified */}
          <Route path ='/countries/:countryId'>
            <Country />
          </Route>

        </Switch>
      </Router>

    </CountriesContext.Provider>
    
  );

}

export default App;
