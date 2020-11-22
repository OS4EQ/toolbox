import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation, useMutation } from 'react-apollo';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

const CREATE_USER = gql`
  mutation createUser($password: String!, $username: String!) {
    createUser(password: $password, username: $username) {
      user {
        id
        username
        password
      }
    }
  }
`;

class Register extends Component {
  state = {
    username: '',
    password: '',
    token: '',
  }

  render() {
    let { username, password } = this.state;

    return (
      <div>
        <NavBar/>
        <Container>
          <h4 class='mt-4'> Register </h4>
          <Form>
            <Form.Group controlId="login">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username}
            onChange={e => this.setState({ username: e.target.value })}/>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password}
            onChange={e => this.setState({ password: e.target.value })}/>
            </Form.Group>
            <Mutation
            mutation={ CREATE_USER }
            variables={{ password, username }}
            onCompleted={data =>
              this._confirm(data)
            }
          >
            {mutation => (
              <Button variant="primary" onClick={mutation}>
                Register
              </Button>
            )}
          </Mutation>
          </Form>
        </Container>
      </div>
    )
  }

  _confirm = async data => {
    console.log(data);
    this.props.history.push(`/login`);
  }
}

export default Register;
