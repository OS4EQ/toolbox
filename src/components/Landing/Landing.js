import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import UserInfo from './test';
import NavBar from '../../components/NavBar/NavBar.js'
// Redux

// Style

// Custom Components



function Landing(props) {
  return (
    <>
      <NavBar />
      {/* <UserInfo /> */}
      <p>Landing page</p>
      <Button>hi</Button>
    </>
  );
}

export default Landing;
