import React from 'react';
import LanguagesContainer from '../../containers/LanguagesContainer';
import TracksContainer from '../../containers/TracksContainer';
import TopicsContainer from '../../containers/TopicsContainer';
import PlaylistsContainer from '../../containers/PlaylistsContainer';
import CreateTrack from '../../containers/CreateTrackContainer';
import CreateTopic from '../../containers/CreateTopicContainer';
import CreatePlaylist from '../../containers/CreatePlaylistContainer';
import CreateLanguage from '../../containers/CreateLanguageContainer';
import UpdateTrack from '../../containers/UpdateTrackContainer';

function InfoView(props) {
  return (
    <>
      <LanguagesContainer />
      <TracksContainer />
      <TopicsContainer />
      <PlaylistsContainer />
      <CreateTrack />
      <CreateTopic />
      <CreatePlaylist />
      <CreateLanguage />
      <UpdateTrack />
    </>
  );
}

export default InfoView;
