import { combineReducers } from 'redux';

// different reducer files
import initialState from './initialState';
import userReducer from './userReducer';
import selectedReducer from './selectedReducer';

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
  selected: selectedReducer,
});

export default rootReducer;
