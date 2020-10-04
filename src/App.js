import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Theme

// Redux

// Custom Components
import Landing from './components/Landing/Landing';

function App(props) {

  return (
      <Switch>
        <Route exact path='/' component={Landing} />

        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        <Redirect to='/' />
      </Switch>
  );
}

export default App;
