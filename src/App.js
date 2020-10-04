import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Style

// Redux

// Custom Components
import Landing from './components/Landing/Landing';
import TopicView from './components/TopicView/TopicView';

function App(props) {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/testing' component={TopicView} />

      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
