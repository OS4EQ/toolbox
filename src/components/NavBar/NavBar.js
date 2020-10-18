import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Audiopedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="mr-auto">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline">Sign Out</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;