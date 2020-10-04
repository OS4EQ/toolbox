import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// Redux

// Style

// Custom Components

function AddLanguage({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Language Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='language'>
            <Form.Label>Language Name</Form.Label>
            <Form.Control type='text' placeholder='Enter language name' />
          </Form.Group>
          <Form.Group>
            <Form.File id='audio' label='Audio File' />
          </Form.Group>
          <Form.Group>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Add
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddLanguage;
