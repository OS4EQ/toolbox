import React from 'react';
import UpdateLanguage from '../../containers/UpdateLanguageContainer';
import UpdatePlaylist from '../../containers/UpdatePlaylistContainer';
import UpdateTopic from '../../containers/UpdateTopicContainer';
import UpdateTrack from '../../containers/UpdateTrackContainer';

function DeleteView(props) {
  return (
    <>
      <UpdateTrack />
      <UpdateTopic />
      <UpdatePlaylist />
      <UpdateLanguage />
    </>
  );
}

export default DeleteView;
