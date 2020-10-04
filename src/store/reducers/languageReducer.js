import initialState from './initialState';

export default function languageReducer(state = initialState.language, action) {
  switch (action.type) {
    case 'SET_SELECTEDLANGUAGE':
      return {
        ...state,
        selectedLanguage: action.payload,
      };

    default:
      return state;
  }
}
