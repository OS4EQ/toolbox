import React from 'react';
import UpdateLanguage from '../../containers/UpdateLanguageContainer';
import UpdatePlaylist from '../../containers/UpdatePlaylistContainer';
import UpdateTopic from '../../containers/UpdateTopicContainer';
import UpdateTrack from '../../containers/UpdateTrackContainer';
import NavBar from '../NavBar/NavBar';

function UpdateView(props) {
  return (
    <>
      <NavBar />
      <UpdateTrack />
      <UpdateTopic />
      <UpdatePlaylist />
      <UpdateLanguage />
    </>
  );
}

export default UpdateView;
