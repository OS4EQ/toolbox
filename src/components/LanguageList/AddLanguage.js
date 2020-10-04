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
          <Form.Group controlId='formBasicLanguage'>
            <Form.Label>Language:</Form.Label>
            <Form.Control type='language' placeholder='Enter language name' />
            <Form.Text className='text-muted'>
              Add a language category.
            </Form.Text>
          </Form.Group>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddLanguage;
