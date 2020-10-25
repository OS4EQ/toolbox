import React from 'react';
// Custom Components

const Playlist = (props) => (
  <div className='card' style={{ width: '100', marginTop: '10px' }}>
    <div className='card-body'>
      <h5 className='card-title'>
        {props.playlist.title}
        (Playlist)
      </h5>
      <h6 className='card-subtitle mb-2 text-muted'>
        Published:
        {props.playlist.published}
      </h6>
      <a href={props.playlist.audioUrl} className='card-link'>
        Go to playlist...
      </a>
    </div>
  </div>
);

export default Playlist;
