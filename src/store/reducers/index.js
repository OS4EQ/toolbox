import { combineReducers } from 'redux';

// Apollo
import apolloClient from '../apollo';

// different reducer files
import initialState from './initialState';
import userReducer from './userReducer';
import frontendReducer from './frontendReducer';

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'USER_LOGOUT') {
    sessionStorage.clear();
    newState = initialState;
  }

  return appReducer(newState, action);
};

const appReducer = combineReducers({
  user: userReducer,
  frontend: frontendReducer,
  apollo: apolloClient.reducer(),
  // TODO
});

export default rootReducer;
