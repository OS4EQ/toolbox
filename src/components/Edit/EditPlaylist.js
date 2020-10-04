import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// Redux

// Style

// Custom Components

function EditPlaylist({ show, handleClose, playlist }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Editing Playlist: ${playlist.title}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicTitle'>
            <Form.Label>Playlist Title:</Form.Label>
            <Form.Control type='title' placeholder='Enter playlist title' />
            <Form.Text className='text-muted'>
              Edit the title of the playlist.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Publish!
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditPlaylist;
