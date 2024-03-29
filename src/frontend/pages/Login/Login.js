import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import * as yup from 'yup';

import PageWrapper from '../../components/PageWrapper';
import schema from './validation/loginSchema';

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(user).then((valid) => {
      setDisabled(!valid);
    });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.DEV_API_URL}users/login`, user)
      .then((res) => {
        handleLogin(res.data);
      })
      .catch((err) => {
        navigate('/');
      });
  };

  return (
    <PageWrapper>
      <StyledLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleChange}
              value={user.username}
              autoComplete="off"
            />
          </label>
          <div id="errorContainer">
            {formErrors.username ? <span id="error">{formErrors.username}</span> : null}
          </div>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
              value={user.password}
              autoComplete="off"
            />
          </label>
          <div id="errorContainer">
            {formErrors.username ? <span id="error">{formErrors.password}</span> : null}
          </div>
          <button id="submit" disabled={disabled}>
            Submit
          </button>
        </form>
      </StyledLogin>
    </PageWrapper>
  );
};

export default Login;

const StyledLogin = styled.div`
  position: relative;
  height: 123px;
  width: 222px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding-bottom: 16px;
  border: 1px solid black;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;

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
    display: flex;
    align-items: flex-start;
    height: 12px;
  }

  #error {
    font-size: 0.6rem;
    color: red;
  }

  #submit {
    position: absolute;
    bottom: -48px;
    height: 30px;
    width: 70px;
    border: 1px solid #212121;
    padding: 2px 6px;
    transition: ease-in-out 0.1s all;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;

    &:hover {
      transform: translateY(-2px);
      border: 1px solid black;
      background-color: azure;
      cursor: pointer;
    }
  }
`;
