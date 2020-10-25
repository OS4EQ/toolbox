import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Topic from '../components/Topic/Topic';

const Topics = () => (
  <Query
    query={gql`
      {
        allTopics {
          id
          title
          index
          audioUrl
          active
          published
          playlists {
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
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allTopics.map((currentTopic) => (
        <Topic topic={currentTopic} />
      ));
    }}
  </Query>
);

export default Topics;
