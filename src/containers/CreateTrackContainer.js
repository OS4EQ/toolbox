import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
// import Language from '../components/Language/Language';

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

const CreateTrack = () => {
  let index;
  let title;
  let audioUrl;
  let transcript;
  let duration;
  let active;
  let published;
  const [createTrack] = useMutation(CREATE_TRACK);
  return (
    <div>
      <h3>Create Track</h3>
      <form
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
      </form>
    </div>
  );
};

export default CreateTrack;
