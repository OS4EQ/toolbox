import React, { useEffect, useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

// Redux

// Style

// Custom Components

function Landing(props) {
  return (
    <>
      <NavBar />
      <Jumbotron>
        <h1>Welcome to the Admin Toolbar for Audiopedia.io!</h1>
        <p>
          Use the navigation bar to create, update, and view content on
          Audiopedia.io. To start managing the content, log in below.
        </p>
        <p>
          <Button href='/login' variant='primary'>
            Log In
          </Button>
        </p>
      </Jumbotron>
    </>
  );
}

export default Landing;
