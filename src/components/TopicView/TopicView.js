import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar.js'
// Redux

// Style

// Custom Components
import TopicList from '../TopicList/TopicList';
import ShowTopic from '../Show/ShowTopic';
import LanguageList from '../LanguageList/LanguageList';

function TopicView(props) {
  return (
    <div>
      <NavBar />
      <Row>
        <Col>
          <LanguageList />
        </Col>
        <Col>
          <TopicList />
        </Col>
        <Col>
          <ShowTopic />
        </Col>
      </Row>
    </div>
  );
}

export default TopicView;
