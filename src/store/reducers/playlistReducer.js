import initialState from './initialState';

export default function playlistReducer(state = initialState.playlist, action) {
  switch (action.type) {
    case 'SET_SELECTEDPLAYLIST':
      return {
        ...state,
        selectedPlaylist: action.payload,
      };

    default:
      return state;
  }
}
