import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Country from './Country';
import worldCountries from 'world-countries';

// Create a React context to contain the world countries dataset
const CountriesContext = React.createContext(worldCountries);

function App() {

  return (
    
    // Provide countries context to all components
    <CountriesContext.Provider value={worldCountries}>

      {/* Application-wide header */}
      <h1>Country Factbook</h1>
      
      <Router basename="process.env.PUBLIC_URL">
        <Switch>

          {/* Path for when a country has been specified */}
          <Route path ='/countries/:countryId'>
            <Country />
          </Route>

          {/* Default path - show user search options */}
          <Route path='/'>
            <p>Hello world!</p>
          </Route>

        </Switch>
      </Router>

    </CountriesContext.Provider>
    
  );
}

export default App;
