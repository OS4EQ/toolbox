import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// Redux

// Style

// Custom Components

function EditTopic({ show, handleClose, topic }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Editing Topic: ${topic.title}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicTitle'>
            <Form.Label>Topic Title:</Form.Label>
            <Form.Control type='title' placeholder='Enter topic title' />
            <Form.Text className='text-muted'>
              Edit the title of the topic.
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
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditTopic;
