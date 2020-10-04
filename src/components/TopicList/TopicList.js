// Template for components
import React, { useEffect, useState } from 'react';

// Redux

// Style
import './TopicList.css';

// Custom Components

const DUMMY_DATA = [
  {
    id: 3,
    language: 'English',
    audio_url: 'https://congregate.live',
    published: true,
  },
  {
    id: 1,
    language: 'French',
    audio_url: 'https://gradescope.com',
    published: true,
  },
  {
    id: 4,
    language: 'Spanish',
    audio_url: 'https://collegearch.org',
    published: true,
  },
  {
    id: 15,
    language: 'Mandarin',
    audio_url: 'https://congregate.live',
    published: true,
  },
  {
    id: 9,
    language: 'Cantonese',
    audio_url: 'https://congregate.live',
    published: true,
  },
];

function TopicList(props) {
  const handleClick = () => {
    console.log('clicked');
  };

  return <p>topic list page</p>;
}

export default TopicList;
