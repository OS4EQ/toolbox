// Redux Setup
import { createStore, applyMiddleware, compose } from 'redux';

// Apollo
import apolloClient from './apollo';

// Redux Reducer
import rootReducer from './reducers/index';

// Redux Persist
import storage from 'redux-persist/lib/storage'; // defaults to sessionStorage for web
import { persistStore, persistReducer } from 'redux-persist';

// set up Redux persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// set up Redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(apolloClient.middleware()))
);
const persistor = persistStore(store);

export { persistor };
export default store;

window.store = store;
