// Template for components
import React, { useEffect, useState } from 'react';

// Redux

// Style

// Custom Components

function Testing({ data }) {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <p>testin stuff you know how it goes...</p>
      <b>{JSON.stringify(data)}</b>
    </>
  );
}

export default Testing;
