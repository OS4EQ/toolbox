import initialState from './initialState';

export default function frontendReducer(state = initialState.frontend, action) {
  switch (action.type) {
    case 'SET_SELECTEDLANGUAGE':
      return {
        ...state,
        selectedLanguage: action.payload,
      };

    case 'SET_SELECTEDPLAYLIST':
      return {
        ...state,
        selectedPlaylist: action.payload,
      };

    case 'SET_SELECTEDTOPIC':
      return {
        ...state,
        selectedTopic: action.payload,
      };

    default:
      return state;
  }
}
