import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

const UPDATE_LANGUAGE = gql`
  mutation updateLanguage(
    $audioUrl: String
    $id: ID!
    $name: String
    $published: Boolean
  ) {
    updateLanguage(
      audioUrl: $audioUrl
      id: $id
      name: $name
      published: $published
    ) {
      ok
      language {
        id
      }
    }
  }
`;

const UpdateLanguage = () => {
  let id;
  let name;
  let audioUrl;
  let published;

  const [updateLanguage] = useMutation(UPDATE_LANGUAGE);
  return (
    <div>
      <h3>Update Language</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateLanguage({
            variables: {
              id: id.value,
              audioUrl: audioUrl.value,
              published: published.value,
              name: name.value,
            },
          });
        }}
      >
        <input ref={(value) => (id = value)} id='id' placeholder='id' />
        <input
          ref={(value) => (name = value)}
          id='name'
          placeholder='name'
        />
        <input
          ref={(value) => (audioUrl = value)}
          id='audioUrl'
          placeholder='audioUrl'
        />
        <input
          ref={(value) => (published = value)}
          id='published'
          placeholder='published'
        />
        <button type='submit'> Update Language</button>
      </form>
    </div>
  );
};

export default UpdateLanguage;
