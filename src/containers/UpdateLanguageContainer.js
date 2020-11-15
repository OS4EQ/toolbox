import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';

const UPDATE_LANGUAGE = gql`
  mutation updateLanguage(
    $audioUrl: String
    $id: ID!
    $name: String
    $published: Boolean
  ) {
    updateLanguage(
      audioUrl: $audioUrl
      id: $id
      name: $name
      published: $published
    ) {
      ok
      language {
        id
      }
    }
  }
`;

function MyVerticallyCenteredModal(props) {
  let id;
  let name;
  let audioUrl;
  let published;
  const [updateLanguage] = useMutation(UPDATE_LANGUAGE);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Update Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateLanguage({
              variables: {
                id: id.value,
                audioUrl: audioUrl.value,
                published: published.value,
                name: name.value,
              },
            });
          }}
        >
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Language ID'
              aria-label='id'
              ref={(value) => (id = value)}
              id='id'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Language name'
              aria-label='name'
              ref={(value) => (name = value)}
              id='name'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Audio Url'
              aria-label='Audio Url'
              ref={(value) => (audioUrl = value)}
              id='audioUrl'
            />
          </InputGroup>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Publish Language'
              ref={(value) => (published = value)}
              id='published'
            />
          </Form.Group>
          <Button type='submit'>Update Language</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const UpdateLanguage = () => {
  // let id;
  // let name;
  // let audioUrl;
  // let published;

  // const [updateLanguage] = useMutation(UPDATE_LANGUAGE);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Create Language
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <h3>Update Language</h3>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          updateLanguage({
            variables: {
              id: id.value,
              audioUrl: audioUrl.value,
              published: published.value,
              name: name.value,
            },
          });
        }}
      >
        <input ref={(value) => (id = value)} id='id' placeholder='id' />
        <input
          ref={(value) => (name = value)}
          id='name'
          placeholder='name'
        />
        <input
          ref={(value) => (audioUrl = value)}
          id='audioUrl'
          placeholder='audioUrl'
        />
        <input
          ref={(value) => (published = value)}
          id='published'
          placeholder='published'
        />
        <button type='submit'> Update Language</button>
      </form> */}
    </div>
  );
};

export default UpdateLanguage;
