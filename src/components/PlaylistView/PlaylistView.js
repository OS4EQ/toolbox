import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar.js'
// Redux

// Style

// Custom Components
import PlaylistList from '../PlaylistList/PlaylistList';
import ShowPlaylist from '../Show/ShowPlaylist';
import LanguageList from '../LanguageList/LanguageList';

function PlaylistView(props) {
  return (
    <div>
      <NavBar />
      <Row>
        <Col>
          <LanguageList />
        </Col>
        <Col>
          <PlaylistList />
        </Col>
        <Col>
          <ShowPlaylist />
        </Col>
      </Row>
    </div>
  );
}

export default PlaylistView;
