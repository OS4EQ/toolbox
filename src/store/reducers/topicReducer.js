import initialState from './initialState';

export default function topicReducer(state = initialState.topic, action) {
  switch (action.type) {
    case 'SET_SELECTEDTOPIC':
      return {
        ...state,
        selectedTopic: action.payload,
      };

    default:
      return state;
  }
}
