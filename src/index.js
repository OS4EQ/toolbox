import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import { PersistGate } from 'redux-persist/es/integration/react';

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// App
import App from './App';

// Custom Components

const apolloClient = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
