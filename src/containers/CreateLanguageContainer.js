import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

const CREATE_LANGUAGE = gql`
  mutation createLanguage($input: LanguageInput!) {
    createLanguage(input: $input) {
      ok
      language {
        id
      }
    }
  }
`;

const CreateLanguage = () => {
  let name;
  let audioUrl;
  let published;
  const [createLanguage] = useMutation(CREATE_LANGUAGE);
  return (
    <div>
      <h3>Create Language</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLanguage({
            variables: {
              input: {
                name: name.value,
                audioUrl: audioUrl.value,
                published: published.value,
              },
            },
          });
        }}
      >
        <input ref={(value) => (name = value)} id='name' placeholder='name' />
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
        <button type='submit'> Create Language</button>
      </form>
    </div>
  );
};

export default CreateLanguage;
