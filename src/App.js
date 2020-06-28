import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Country from './Country';

function App() {
  return (
    <React.Fragment>

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

    </React.Fragment>
    
  );
}

export default App;
