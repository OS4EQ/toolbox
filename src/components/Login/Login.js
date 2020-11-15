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
    }
  }
`;
const VERIFY_TOKEN = gql`
  mutation verifyToken($token: String) {
    verifyToken(token: $token) {
      payload
    }
  }
`;

// function Login() {
//   let username;
//   let password;
//   let generatedToken;
//   const [tokenAuth, { data }] = useMutation(TOKEN_AUTH);
//   const [verifyToken, { token }] = useMutation(VERIFY_TOKEN);

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           tokenAuth(
//             { variables: { username, password } },
//             {
//               onCompleted: (data) => 
//                 (generatedToken = data),
//             }
//           );
//           // verifyToken({ variables: { generatedToken } });
//         }}
//       >
//         <input
//           ref={(value) => (username = value)}
//           id='username'
//           placeholder='username'
//         />
//         <input
//           ref={(value) => (password = value)}
//           id='password'
//           placeholder='password'
//         />
//         <button type='submit'> Log in</button>
//       </form>
//     </div>
//   );
// }

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    username: '',
    password: '',
    token: '',
  }

// render() {
//   const { login, username, password } = this.state
//   return (
//     <div>
//       <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
//       <div className="flex flex-column">
//         <input
//           value={username}
//           onChange={e => this.setState({ username: e.target.value })}
//           type="text"
//           placeholder="Your username address"
//         />
//         <input
//           value={password}
//           onChange={e => this.setState({ password: e.target.value })}
//           type="password"
//           placeholder="Choose a safe password"
//         />
//       </div>
//       <div className="flex mt3">
//         <Mutation
//           mutation={login ? LOGIN : SIGNUP}
//           variables={{ username, password }}
//           onCompleted={data => this._confirm(data)}
//         >
//           {mutation => (
//             <div className="pointer mr2 button" onClick={mutation}>
//               {login ? 'login' : 'create account'}
//             </div>
//           )}
//         </Mutation>

//         <div
//           className="pointer button"
//           onClick={() => this.setState({ login: !login })}
//         >
//           {login ? 'need to create an account?' : 'already have an account?'}
//         </div>
//       </div>
//     </div>
//   )
// }

render() {
  let { username, password, token } = this.state;
  // const Composed = adopt({
  //   // `planId` is passed from below via props (see `<ContainerComponent />) 
  //   tokenAuth: ({ username, password, render }) => (
  //     <Mutation mutation={ TOKEN_AUTH } variables={{ username, password }}>{render}</Mutation>,
  //     ),
  //   // `planId` is passed from below via props (see `<ContainerComponent />)
  //   verifyToken: ({ token, render })=> (
  //     <Mutation mutation={ VERIFY_TOKEN } variables={{ token }}>{render}</Mutation>                 
  //   )
  // });
  const handleClick = async (mutation1, mutation2) => {
    const data1 = await mutation1();
    console.log(data1.data.tokenAuth.token);
    // await this.setState({ token: data1.data.tokenAuth.token })};
    token = data1.data.tokenAuth.token;
    sessionStorage.setItem("AUTH_TOKEN", token);
    console.log(token);
    const data2 = await mutation2();
    console.log(data2);
  }

  const Mutations = () => (
    <Composer
      components={[
        <Mutation mutation={ TOKEN_AUTH } variables={{ username, password }} />,
        <Mutation mutation={ VERIFY_TOKEN } variables={{ token }} />
      ]}
    >
      {([mutation1, mutation2]) => (
        <Button onClick={() => handleClick(mutation1, mutation2)}>
          Log in
        </Button>
      )}
    </Composer>
  )
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
          {/* <Mutation
          mutation={ TOKEN_AUTH }
          variables={{ username, password }}
          onCompleted={data =>
            this._confirm(data)
            // this._verifyToken(data)
            // console.log(data.tokenAuth.token)
          }
        >
          {mutation => (
            <Button variant="primary" onClick={mutation}>
              Log in
            </Button>
          )}
        </Mutation> */}
        <Mutations></Mutations>
          
        </Form>
      </Container>
    </div>
  )
}

_confirm = async data => {
  const token = data.tokenAuth.token;
  console.log(data.tokenAuth.token);
  this._saveUserData(token);
  this._verifyToken();
  this.props.history.push(`/login`);
}

_saveUserData = token => {
  localStorage.setItem('AUTH_TOKEN', token);
}

_verifyToken = async => {
  const token = localStorage.getItem('AUTH_TOKEN');
  const verifyToken = useMutation(VERIFY_TOKEN);
  verifyToken({ variables: { token }},
    {
      onCompleted: newdata => console.log(newdata.verifyToken.payload)

  });

}
}

export default Login;
