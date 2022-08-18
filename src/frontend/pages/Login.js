import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    credentials: {
      username: '',
      password: '',
    },
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('logging in with: ', user.credentials);
    axios
      .post('endpoint/here', user.credentials)
      .then((res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        //implement validation, user should be routed to signup if credentials are new/unlisted
        navigate('/');
      });
  };

  return (
    <PageWrapper>
      <StyledLogin>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleChange}
              value={user.credentials.username}
              autoComplete="off"
            />
          </label>
          <div id="errorContainer">
            {/* {error ? <span className="errorMsg">{error.username}</span> : null} */}
          </div>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
              value={user.credentials.password}
              autoComplete="off"
            />
          </label>
          <div id="errorContainer">
            {/* {error ? <span className="errorMsg">{error.username}</span> : null} */}
          </div>
          <button id="submit">Submit</button>
        </form>
      </StyledLogin>
    </PageWrapper>
  );
};

export default Login;

const StyledLogin = styled.div`
  position: relative;
  height: 111px;
  width: 222px;
  background-color: #70a148;
  border: 1px solid black;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  text-align: center;
  padding-bottom: 16px;

  h1 {
    padding: 8px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    outline: none;
    text-indent: 2px;
    border: 1px solid black;
    border-radius: 4px;
    height: 20px;
  }

  #errorContainer {
    height: 12px;
  }

  #submit {
    position: absolute;
    bottom: -48px;
    height: 30px;
    width: 70px;
    border: 1px solid #212121;
    padding: 2px 6px;
    cursor: pointer;
    transition: ease-in-out 0.1s all;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;

    &:hover {
      transform: translateY(-4px);
      border: 1px solid black;
      background-color: azure;
    }
  }
`;
