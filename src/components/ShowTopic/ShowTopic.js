import React, { useEffect, useState } from 'react';
import { Modal, Form, Button, Card } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

// Style

// Custom Components

function ShowTopic({ selectedTopic }) {
  return (
    <Card>
      <Card.Title>{selectedTopic.title}</Card.Title>
      <Card.Body>
        <p>{selectedTopic.title}</p>
        <p>{selectedTopic.id}</p>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTopic: state.topic.selectedTopic,
  };
};

export default connect(mapStateToProps, null)(ShowTopic);
