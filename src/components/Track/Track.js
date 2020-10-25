import React from 'react';
// Custom Components
// import TracksInfo from './components/TracksInfo/TracksInfo';

const Track = (props) => (
  <div className='card' style={{ width: '100', marginTop: '10px' }}>
    <div className='card-body'>
      <h5 className='card-title'>
        {props.track.title}
        (Track)
      </h5>
      <h6 className='card-subtitle mb-2 text-muted'>
        Published:
        {props.track.published}
      </h6>
      <a href={props.track.audioUrl} className='card-link'>
        Go to track...
      </a>
    </div>
  </div>
);

export default Track;
