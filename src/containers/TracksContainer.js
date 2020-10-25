import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
// Custom Components
// import TracksInfo from './components/TracksInfo/TracksInfo';
import Track from '../components/Track/Track';

const Tracks = () => (
  <Query
    query={gql`
      {
        allTracks {
          id
          title
          index
          audioUrl
          transcript
          duration
          createdAt
          updatedAt
          active
          published
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allTracks.map((currentTrack) => (
        <Track track={currentTrack} />
      ));
    }}
  </Query>
);

export default Tracks;
