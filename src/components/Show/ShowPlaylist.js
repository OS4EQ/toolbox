import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';

// Style

// Custom Components

function ShowPlaylist({ selectedPlaylist }) {
  const published = selectedPlaylist.published ? 'Yes' : 'No';

  return (
    <Card className='layout-card'>
      <Card.Title>{selectedPlaylist.title}</Card.Title>
      <Card.Body>
        <p>{selectedPlaylist.title}</p>
        <p>{selectedPlaylist.id}</p>
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
    selectedPlaylist: state.frontend.selectedPlaylist,
  };
};

export default connect(mapStateToProps, null)(ShowPlaylist);
