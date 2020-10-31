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
import CreateView from './components/CreateView/CreateView';
import UpdateView from './components/UpdateView/UpdateView';

function App(props) {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/testing' component={Testing} />
      <Route exact path='/all-topics' component={TopicView} />
      <Route exact path='/topic' component={PlaylistView} />
      <Route exact path='/info' component={InfoView} />
      <Route exact path='/create' component={CreateView} />
      <Route exact path='/update' component={UpdateView} />
      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
