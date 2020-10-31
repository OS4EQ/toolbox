import React from 'react';
import CreateTrack from '../../containers/CreateTrackContainer';
import CreateTopic from '../../containers/CreateTopicContainer';
import CreatePlaylist from '../../containers/CreatePlaylistContainer';
import CreateLanguage from '../../containers/CreateLanguageContainer';

function CreateView(props) {
  return (
    <>
      <CreateTrack />
      <CreateTopic />
      <CreatePlaylist />
      <CreateLanguage />
    </>
  );
}

export default CreateView;
