import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';

const CREATE_TRACK = gql`
  mutation createTrack($input: TrackInput!) {
    createTrack(input: $input) {
      ok
      track {
        index
      }
    }
  }
`;

function MyVerticallyCenteredModal(props) {
  let index;
  let title;
  let audioUrl;
  let transcript;
  let duration;
  let active;
  let published;
  const [createTrack] = useMutation(CREATE_TRACK);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>New Track</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createTrack({
              variables: {
                input: {
                  index: index.value,
                  title: title.value,
                  audioUrl: audioUrl.value,
                  transcript: transcript.value,
                  duration: duration.value,
                  active: active.value,
                  published: published.value,
                },
              },
            });
          }}
        >
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Index'
              aria-label='Track Title'
              ref={(value) => (index = value)}
              id='index'
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Track Title'
              aria-label='Track Title'
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
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Transcript</Form.Label>
            <Form.Control as="textarea" rows={3} 
            ref={(value) => (transcript = value)}
            id='transcript'/>
          </Form.Group>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Duration'
              aria-label='Duration'
              ref={(value) => (duration = value)}
              id='duration'
            />
          </InputGroup>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Make Track active'
              ref={(value) => (active = value)}
              id='active'
            />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Publish Track'
              ref={(value) => (published = value)}
              id='published'
            />
          </Form.Group>
          <Button type='submit'> Create Track</Button>
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

const CreateTrack = () => {
  // let index;
  // let title;
  // let audioUrl;
  // let transcript;
  // let duration;
  // let active;
  // let published;
  // const [createTrack] = useMutation(CREATE_TRACK);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Create Track
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <h3>Create Track</h3>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          createTrack({
            variables: {
              input: {
                index: index.value,
                title: title.value,
                audioUrl: audioUrl.value,
                transcript: transcript.value,
                duration: duration.value,
                active: active.value,
                published: published.value,
              },
            },
          });
        }}
      >
        <input ref={(value) => (index = value)} id='index' placeholder='index' />
        <input ref={(value) => (title = value)} id='title' placeholder='title' />
        <input ref={(value) => (audioUrl = value)} id='audioUrl' placeholder='audioUrl' />
        <input ref={(value) => (transcript = value)} id='transcript' placeholder='transcript' />
        <input ref={(value) => (duration = value)} id='duration' placeholder='duration' />
        <input ref={(value) => (active = value)} id='active' placeholder='active' />
        <input ref={(value) => (published = value)} id='published' placeholder='published' />
        <button type='submit'> Create Track</button>
      </form> */}
    </div>
  );
};

export default CreateTrack;
