import React from 'react';
import CreateTrack from '../../containers/CreateTrackContainer';
import CreateTopic from '../../containers/CreateTopicContainer';
import CreatePlaylist from '../../containers/CreatePlaylistContainer';
import CreateLanguage from '../../containers/CreateLanguageContainer';
import NavBar from '../NavBar/NavBar';

function CreateView(props) {
  return (
    <>
      <NavBar />
      <CreateTrack />
      <CreateTopic />
      <CreatePlaylist />
      <CreateLanguage />
    </>
  );
}

export default CreateView;
