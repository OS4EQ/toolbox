import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';

const CREATE_PLAYLIST = gql`
  mutation createPlaylist($input: PlaylistInput!) {
    createPlaylist(input: $input) {
      ok
      playlist {
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
  let tracks;
  const [createPlaylist] = useMutation(CREATE_PLAYLIST);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>New Playlist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createPlaylist({
              variables: {
                input: {
                  index: index.value,
                  title: title.value,
                  audioUrl: audioUrl.value,
                  active: active.value,
                  published: published.value,
                  tracks: tracks.value,
                },
              },
            });
          }}
        >
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Index'
              aria-label='Playlist Title'
              ref={(value) => (index = value)}
              id='index'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Playlist Title'
              aria-label='Playlist Title'
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
              label='Make Playlist active'
              ref={(value) => (active = value)}
              id='active'
            />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Publish Playlist'
              ref={(value) => (published = value)}
              id='published'
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label>Tracks</Form.Label>
            <Form.Control
              as='select'
              custom
              ref={(value) => (tracks = value)}
              id='tracks'
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button type='submit'> Create Playlist</Button>
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

const CreatePlaylist = () => {
  // let index;
  // let title;
  // let audioUrl;
  // let active;
  // let published;
  // let tracks;
  // const [createPlaylist] = useMutation(CREATE_PLAYLIST);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Create Playlist
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <h3>Create Playlist</h3>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          createPlaylist({
            variables: {
              input: {
                index: index.value,
                title: title.value,
                audioUrl: audioUrl.value,
                active: active.value,
                published: published.value,
                tracks: tracks.value,
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
          ref={(value) => (tracks = value)}
          id='tracks'
          placeholder='tracks'
        />
        <button type='submit'> Create Playlist</button>
      </form> */}
    </div>
  );
};

export default CreatePlaylist;
