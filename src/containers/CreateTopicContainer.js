import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';
// import Language from '../components/Language/Language';

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

const CreateTopic = () => {
  let index;
  let title;
  let audioUrl;
  let active;
  let published;
  let playlists;
  const [createTopic] = useMutation(CREATE_TOPIC);
  return (
    <div>
      <h3>Create Topic</h3>
      <form
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
        <input ref={(value) => (index = value)} id='index' placeholder='index' />
        <input ref={(value) => (title = value)} id='title' placeholder='title' />
        <input ref={(value) => (audioUrl = value)} id='audioUrl' placeholder='audioUrl' />
        <input ref={(value) => (active = value)} id='active' placeholder='active' />
        <input ref={(value) => (published = value)} id='published' placeholder='published' />
        <input ref={(value) => (playlists = value)} id='playlists' placeholder='playlists' />
        <button type='submit'> Create Topic</button>
      </form>
    </div>
  );
};

export default CreateTopic;
