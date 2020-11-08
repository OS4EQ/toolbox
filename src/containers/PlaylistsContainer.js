import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Playlist from '../components/Playlist/Playlist';

const Playlists = () => (
  <Query
    query={gql`
      {
        allPlaylists {
          id
          title
          index
          audioUrl
          active
          published
          tracks {
            id
            title
            index
            audioUrl
            transcript
            duration
            active
            published
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allPlaylists.map((currentPlaylist) => (
        <Playlist playlist={currentPlaylist} />
      ));
    }}
  </Query>
);

export default Playlists;
