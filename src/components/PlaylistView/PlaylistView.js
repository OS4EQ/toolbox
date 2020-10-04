import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// Redux

// Style

// Custom Components
import PlaylistList from '../PlaylistList/PlaylistList';
import ShowPlaylist from '../Show/ShowPlaylist';
import LanguageList from '../LanguageList/LanguageList';

function PlaylistView(props) {
  return (
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
  );
}

export default PlaylistView;
