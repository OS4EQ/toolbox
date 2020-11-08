import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

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

const CreatePlaylist = () => {
  let index;
  let title;
  let audioUrl;
  let active;
  let published;
  let tracks;
  const [createPlaylist] = useMutation(CREATE_PLAYLIST);
  return (
    <div>
      <h3>Create Playlist</h3>
      <form
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
      </form>
    </div>
  );
};

export default CreatePlaylist;
