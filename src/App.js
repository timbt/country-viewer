import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Country from './Country';

function App() {
  return (
    <Router basename="process.env.PUBLIC_URL">
      <Switch>

        {/*Path for when a country has been specified*/}
        <Route path ='/countries'>
          <Country />
        </Route>

        {/*Default path - show user search options*/}
        <Route path='/'>
          <p>Hello world!</p>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
