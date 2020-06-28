import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';

function CountryDetail() {

  const { countryId } = useParams();

  return(
  <p>You requested: {countryId}</p>
  );
}

function Country() {

  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:countryId`}>
        <CountryDetail /> 
      </Route>
    </Switch>
  );
}

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
