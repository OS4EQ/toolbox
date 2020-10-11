import React, { useEffect, useState } from 'react';

// Apollo
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// Custom Components
import Testing from './components/Testing/Testing';

const QUERY = gql`
  query {
    allPlaylists {
      title
    }
  }
`;

function TestingContainer() {
  return (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        return <Testing data={data} />;
      }}
    </Query>
  );
}

export default TestingContainer;
