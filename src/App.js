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
import PlaylistView from './components/PlaylistView/PlaylistView';
import TopicView from './components/TopicView/TopicView';
import Testing from './components/Testing/Testing';
import InfoView from './components/InfoView/InfoView';

function App(props) {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/testing' component={Testing} />
      <Route exact path='/all-topics' component={TopicView} />
      <Route exact path='/topic' component={PlaylistView} />
      <Route exact path='/info' component={InfoView} />

      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
