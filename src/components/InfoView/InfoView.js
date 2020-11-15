import React from 'react';
import LanguagesContainer from '../../containers/LanguagesContainer';
import TracksContainer from '../../containers/TracksContainer';
import TopicsContainer from '../../containers/TopicsContainer';
import PlaylistsContainer from '../../containers/PlaylistsContainer';
import NavBar from '../NavBar/NavBar';

function InfoView(props) {
  return (
    <>
      <NavBar />
      <LanguagesContainer />
      <TracksContainer />
      <TopicsContainer />
      <PlaylistsContainer />
    </>
  );
}

export default InfoView;
