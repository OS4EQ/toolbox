import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';

const CREATE_LANGUAGE = gql`
  mutation createLanguage($input: LanguageInput!) {
    createLanguage(input: $input) {
      ok
      language {
        id
      }
    }
  }
`;

function MyVerticallyCenteredModal(props) {
  let name;
  let audioUrl;
  let published;
  const [createLanguage] = useMutation(CREATE_LANGUAGE);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>New Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createLanguage({
              variables: {
                input: {
                  name: name.value,
                  audioUrl: audioUrl.value,
                  published: published.value,
                },
              },
            });
          }}
        >
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Index'
              aria-label='Language Title'
              ref={(value) => (name = value)}
              id='index'
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
          <Button type='submit'>Create Language</Button>
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

const CreateLanguage = () => {
  // let name;
  // let audioUrl;
  // let published;
  // const [createLanguage] = useMutation(CREATE_LANGUAGE);
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
      <h3>Create Language</h3>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          createLanguage({
            variables: {
              input: {
                name: name.value,
                audioUrl: audioUrl.value,
                published: published.value,
              },
            },
          });
        }}
      >
        <input ref={(value) => (name = value)} id='name' placeholder='name' />
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
        <button type='submit'> Create Language</button>
      </form> */}
    </div>
  );
};

export default CreateLanguage;
