const initialState = {
  user: {
    user: {},
  },
  frontend: {
    selectedTopic: {
      id: 0,
      title: 'No Topic Selected',
    },
    selectedPlaylist: {
      id: 0,
      title: 'No Playlist Selected',
    },
    selectedLanguage: {
      id: 0,
      name: 'No Language Selected',
    },
  },
  apollo: {},
};

export default initialState;
