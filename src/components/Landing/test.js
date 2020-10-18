import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
const QUERY_TRACKS = gql`
  query {
  allTracks {
    title
    index
  }
}
`;
export function TracksInfo() {
    // Polling: provides near-real-time synchronization with
    // your server by causing a query to execute periodically
    // at a specified interval
    const { loading, error, data } = useQuery(QUERY_TRACKS);

    // should handle loading status
    if (loading) return <p>Loading...</p>;
    if (error) return 'Error!';
    // return (data.allTracks.index);
    return data.allTracks.map(({ index, title }) => (
        <div key={index}>
            <p>
                User - {index}: {title}
            </p>
        </div>
    ));
}

export default TracksInfo;