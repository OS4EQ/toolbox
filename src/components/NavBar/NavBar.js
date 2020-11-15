import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand href='/home'>Audiopedia.io</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/create'>Create</Nav.Link>
          <Nav.Link href='/update'>Update</Nav.Link>
          <Nav.Link href='/info'>View</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/login'>Log In</Nav.Link>
          <Nav.Link eventKey={2} href='#memes'>
            Log Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const NavBar = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default NavBar;
