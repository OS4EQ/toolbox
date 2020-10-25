import React from 'react';
// Custom Components

const Topic = (props) => (
  <div className='card' style={{ width: '100', marginTop: '10px' }}>
    <div className='card-body'>
      <h5 className='card-title'>
        {props.topic.title}
        (Topic)
      </h5>
      <h6 className='card-subtitle mb-2 text-muted'>
        Published:
        {props.topic.published}
      </h6>
      <a href={props.topic.audioUrl} className='card-link'>
        Go to topic...
      </a>
    </div>
  </div>
);

export default Topic;
