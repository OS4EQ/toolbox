import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
import { Form } from 'react-bootstrap';
// import Language from '../components/Language/Language';

const UPDATE_TRACK = gql`
  mutation updateTrack(
    $active: Boolean
    $audioUrl: String
    $duration: String
    $id: ID!
    $index: Int
    $published: Boolean
    $transcript: String
  ) {
    updateTrack(
      active: $active
      audioUrl: $audioUrl
      duration: $duration
      id: $id
      index: $index
      published: $published
      transcript: $transcript
    ) {
      ok
      track {
        id
      }
    }
  }
`;

const UpdateTrack = () => {
  let id;
  let index;
  let title;
  let audioUrl;
  let transcript;
  let duration;
  let active;
  let published;
  const [updateTrack] = useMutation(UPDATE_TRACK);
  return (
    <div>
      <h3>Update Track</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateTrack({
            variables: {
              id: id.value,
              index: index.value,
              title: title.value,
              audioUrl: audioUrl.value,
              transcript: transcript.value,
              duration: duration.value,
              active: active.value,
              published: published.value,
            },
          });
        }}
      >
        <input ref={(value) => (id = value)} id='id' placeholder='id' />
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
          ref={(value) => (transcript = value)}
          id='transcript'
          placeholder='transcript'
        />
        <input
          ref={(value) => (duration = value)}
          id='duration'
          placeholder='duration'
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
        <button type='submit'> Update Track</button>
      </form>
    </div>
  );
};

export default UpdateTrack;
