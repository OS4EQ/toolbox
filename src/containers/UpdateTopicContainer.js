import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

const UPDATE_TOPIC = gql`
  mutation updateTopic(
    $active: Boolean
    $audioUrl: String
    $id: ID!
    $index: Int
    $playlists: [ID]
    $published: Boolean
    $title: String
  ) {
    updateTopic(
      active: $active
      audioUrl: $audioUrl
      id: $id
      index: $index
      playlists: $playlists
      published: $published
      title: $title
    ) {
      ok
      topic {
        id
      }
    }
  }
`;

const UpdateTopic = () => {
  let id;
  let index;
  let title;
  let audioUrl;
  let active;
  let published;
  let playlists;
  const [updateTopic] = useMutation(UPDATE_TOPIC);
  return (
    <div>
      <h3>Update Topic</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateTopic({
            variables: {
              id: id.value,
              index: index.value,
              title: title.value,
              audioUrl: audioUrl.value,
              playlists: playlists.value,
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
        <button type='submit'> Update Topic</button>
      </form>
    </div>
  );
};

export default UpdateTopic;
