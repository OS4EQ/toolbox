import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Redux

// Style

// Custom Components

function EditTopic({ show, handleClose, topic }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Editing Topic: ${topic.title}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTopic;
