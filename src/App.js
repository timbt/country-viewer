import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Country from './Country';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/countries'>
          <Country />
        </Route>
        <Route path='/'>
          <p>Hello world!</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
