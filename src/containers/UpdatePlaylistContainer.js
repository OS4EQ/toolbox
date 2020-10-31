import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

const UPDATE_PLAYLIST = gql`
  mutation updatePlaylist(
    $active: Boolean
    $audioUrl: String
    $id: ID!
    $index: Int
    $published: Boolean
    $title: String
    $tracks: [ID]
  ) {
    updatePlaylist(
      active: $active
      audioUrl: $audioUrl
      id: $id
      index: $index
      published: $published
      title: $title
      tracks: $tracks
    ) {
      ok
      playlist {
        id
      }
    }
  }
`;

const UpdatePlaylist = () => {
  let id;
  let index;
  let title;
  let audioUrl;
  let active;
  let published;
  let tracks;
  const [updatePlaylist] = useMutation(UPDATE_PLAYLIST);
  return (
    <div>
      <h3>Update Playlist</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updatePlaylist({
            variables: {
              id: id.value,
              index: index.value,
              title: title.value,
              audioUrl: audioUrl.value,
              tracks: tracks.value,
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
          ref={(value) => (tracks = value)}
          id='tracks'
          placeholder='tracks'
        />
        <button type='submit'> Update Playlist</button>
      </form>
    </div>
  );
};

export default UpdatePlaylist;
