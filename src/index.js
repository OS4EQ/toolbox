import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import dotenv from 'dotenv';

// Redux
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// App
import App from './App';

// Custom Components

require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
