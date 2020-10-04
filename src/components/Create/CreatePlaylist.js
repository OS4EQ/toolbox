import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

// Redux

// Style

// Custom Components

function CreatePlaylist({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Playlist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Playlist Title' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Control as='select' defaultValue='English'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.File id='audio' label='Audio File' />
          </Form.Group>
          <Form.Group>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Save Changes
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreatePlaylist;
