import React, { Component } from 'react';
import { AUTH_TOKEN } from '../../constants';
import { gql } from 'apollo-boost';
import { Mutation, useMutation } from 'react-apollo';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Composer from 'react-composer';

const SIGNUP = gql`
  mutation createUser($password: String!, $username: String!) {
    createUser(password: $password, username: $username) {
      id
      username
    }
  }
`;
const TOKEN_AUTH = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
    }
  }
`;
const VERIFY_TOKEN = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    username: '',
    password: '',
    token: '',
  }

  render() {
    let { username, password, token } = this.state;
    const handleClick = async (mutation1, mutation2) => {
      const data1 = await mutation1();
      token = data1.data.tokenAuth.token;
      localStorage.setItem("AUTH_TOKEN", token);
      console.log(token);
      let in_storage = localStorage.getItem("AUTH_TOKEN");
      console.log(in_storage);
    }

    return (
      <div>
        <NavBar/>
        <Container>
          <h4 class='mt-4'> Log In </h4>
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
            mutation={ TOKEN_AUTH }
            variables={{ username, password }}
            onCompleted={data =>
              this._confirm(data)
            }
          >
            {mutation => (
              <Button variant="primary" onClick={mutation}>
                Log in
              </Button>
            )}
          </Mutation>
          </Form>
        </Container>
      </div>
    )
  }

  _confirm = async data => {
    const token = data.tokenAuth.token;
    this._saveUserData(token);
    this.props.history.push(`/`);
    console.log(token);
  }

  _saveUserData = token => {
    localStorage.setItem('AUTH_TOKEN', token);
  }
}

export default Login;
