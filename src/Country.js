import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import CountryDetail from './CountryDetail';

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

export default Country;
