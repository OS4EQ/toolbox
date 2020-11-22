import React, { Component, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Route , withRouter} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  state = {
    loggedIn: (localStorage.getItem('AUTH_TOKEN') !== null) ? true: false
  }
  logout() {
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.clear();
    this.setState({ loggedIn: false });
    this.props.history.push('/');
  };
  
  render() {
    let { loggedIn } = this.state;
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
          {loggedIn === false && <Nav.Link href='/login'>Log In</Nav.Link>}
          {loggedIn === true && <Nav.Link onClick={this.logout}>Log Out</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
export default withRouter(NavBar);
