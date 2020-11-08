import React from 'react';
import LanguagesContainer from '../../containers/LanguagesContainer';
import TracksContainer from '../../containers/TracksContainer';
import TopicsContainer from '../../containers/TopicsContainer';
import PlaylistsContainer from '../../containers/PlaylistsContainer';

function InfoView(props) {
  return (
    <>
      <LanguagesContainer />
      <TracksContainer />
      <TopicsContainer />
      <PlaylistsContainer />
    </>
  );
}

export default InfoView;
