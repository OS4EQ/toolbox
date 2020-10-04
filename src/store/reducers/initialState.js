const initialState = {
  user: {
    user: {},
  },
  topic: {
    topics: [],
    selectedTopic: {
      id: 0,
      title: 'No Topic Selected',
    },
  },
  language: {
    languages: [],
    selectedLanguage: {
      id: 0,
      name: 'No Language Selected',
    },
  },
};

export default initialState;
