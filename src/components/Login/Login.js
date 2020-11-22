import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation, useMutation } from 'react-apollo';
import { Form, Button, Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Composer from 'react-composer';


const TOKEN_AUTH = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
    }
  }
`;

class Login extends Component {
  state = {
    username: '',
    password: '',
    token: '',
  }

  render() {
    let { username, password, token } = this.state;

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
            <Form.Group>
              <a href='register'> New user? Register here.</a>
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
    sessionStorage.setItem('AUTH_TOKEN', token);
  }
}

export default Login;
