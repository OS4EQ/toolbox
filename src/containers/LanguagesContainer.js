import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Language from '../components/Language/Language';

const Languages = () => (
  <Query
    query={gql`
      {
        allLanguages {
          id
          name
          audioUrl
          published
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allLanguages.map((currentLanguage) => (
        <Language language={currentLanguage} />
      ));
    }}
  </Query>
);

export default Languages;
