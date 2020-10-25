import React from 'react';
// Custom Components

const Language = (props) => (
  <div className='card' style={{ width: '100', marginTop: '10px' }}>
    <div className='card-body'>
      <h5 className='card-title'>
        {props.language.name}
        (Language)
      </h5>
      <h6 className='card-subtitle mb-2 text-muted'>
        Published:
        {props.language.published}
      </h6>
      <a href={props.language.audioUrl} className='card-link'>
        Go to language...
      </a>
    </div>
  </div>
);

export default Language;
