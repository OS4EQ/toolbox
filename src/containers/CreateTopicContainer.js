import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';

const CREATE_TOPIC = gql`
  mutation createTopic($input: TopicInput!) {
    createTopic(input: $input) {
      ok
      topic {
        id
      }
    }
  }
`;

function MyVerticallyCenteredModal(props) {
  let index;
  let title;
  let audioUrl;
  let active;
  let published;
  let playlists;
  const [createTopic] = useMutation(CREATE_TOPIC);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>New Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createTopic({
              variables: {
                input: {
                  index: index.value,
                  title: title.value,
                  audioUrl: audioUrl.value,
                  active: active.value,
                  published: published.value,
                  playlists: playlists.value,
                },
              },
            });
          }}
        >
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Index'
              aria-label='Topic Title'
              ref={(value) => (index = value)}
              id='index'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Topic Title'
              aria-label='Topic Title'
              ref={(value) => (title = value)}
              id='title'
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
              label='Make Topic active'
              ref={(value) => (active = value)}
              id='active'
            />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Publish Topic'
              ref={(value) => (published = value)}
              id='published'
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label>Playlists</Form.Label>
            <Form.Control
              as='select'
              custom
              ref={(value) => (playlists = value)}
              id='playlists'
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button type='submit'> Create Topic</Button>
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

const CreateTopic = () => {
  // let index;
  // let title;
  // let audioUrl;
  // let active;
  // let published;
  // let playlists;

  const [modalShow, setModalShow] = React.useState(false);
  // const [createTopic] = useMutation(CREATE_TOPIC);
  return (
    <div>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Create Topic
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <h3>Create Topic</h3>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          createTopic({
            variables: {
              input: {
                index: index.value,
                title: title.value,
                audioUrl: audioUrl.value,
                active: active.value,
                published: published.value,
                playlists: playlists.value,
              },
            },
          });
        }}
      >
        <input
          ref={(value) => (index = value)}
          id='index'
          placeholder='index'
        />
        <input
          ref={(value) => (title = value)}
          id='title'
          placeholder='title'
        />
        <input
          ref={(value) => (audioUrl = value)}
          id='audioUrl'
          placeholder='audioUrl'
        />
        <input
          ref={(value) => (active = value)}
          id='active'
          placeholder='active'
        />
        <input
          ref={(value) => (published = value)}
          id='published'
          placeholder='published'
        />
        <input
          ref={(value) => (playlists = value)}
          id='playlists'
          placeholder='playlists'
        />
        <Button type='submit'> Create Topic</Button>
      </form> */}
    </div>
  );
};

export default CreateTopic;
