import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import store, { persistor } from './store/store';
import { PersistGate } from 'redux-persist/es/integration/react';

// Apollo
import { ApolloProvider } from 'react-apollo';
import apolloClient from './store/apollo';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// App
import App from './App';

// Custom Components

require('dotenv').config();

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </ApolloProvider>,
  document.getElementById('root')
);
