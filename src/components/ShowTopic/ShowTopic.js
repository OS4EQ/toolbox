import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

// Style

// Custom Components

function ShowTopic({ selectedTopic }) {
  const published = selectedTopic.published ? 'Yes' : 'No';

  return (
    <Card>
      <Card.Title>{selectedTopic.title}</Card.Title>
      <Card.Body>
        <p>{selectedTopic.title}</p>
        <p>{selectedTopic.id}</p>
        <p>{`Published? ${published}`}</p>
      </Card.Body>
      <Card.Footer>
        <Button variant='primary'>Publish!</Button>
      </Card.Footer>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTopic: state.topic.selectedTopic,
  };
};

export default connect(mapStateToProps, null)(ShowTopic);
