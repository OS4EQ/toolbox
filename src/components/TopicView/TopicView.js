import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// Redux

// Style

// Custom Components
import TopicList from '../TopicList/TopicList';
import ShowTopic from '../Show/ShowTopic';
import LanguageList from '../LanguageList/LanguageList';

function TopicView(props) {
  return (
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
  );
}

export default TopicView;
