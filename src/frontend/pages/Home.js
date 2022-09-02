import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const [searchValue, setSearchValue] = useState('activities/random');
  const [response, setResponse] = useState({
    activity: '',
    description: '',
    title: null,
    type: null,
    requirements: '',
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`${process.env.DEV_API_URL}${searchValue}`)
      .then((res) => {
        console.log('hello?', res.data);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PageWrapper>
      <h1>Try it out:</h1>
      <SearchContainer>
        <section>
          <span>https://www.ecobossapi.com/</span>
          <input
            type="text"
            placeholder="activities/random"
            value={searchValue}
            onChange={handleChange}
            autoComplete="off"
          />
        </section>
        <div id="submit" onClick={handleSearch}>
          Submit
        </div>
      </SearchContainer>
      <ResponseContainer>
        <p><span>Activity:</span> {response.activity}</p>
        <p><span>Description:</span> {response.description}</p>
        <p><span>Theme:</span> {response.title}</p>
        <p><span>Boss:</span> {response.type}</p>
        <p><span>Link:</span> {response.link}</p>
      </ResponseContainer>
    </PageWrapper>
  );
};

export default Home;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: white;
  border: 1px solid black;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  color: #ccc;
  margin: 20px;

  section {
    flex: 1;
    padding: 8px;
  }

  input {
    border: none;
    outline: none;
    padding: 8px;
  }

  #submit {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 1rem;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-left: 1px solid black;
    cursor: pointer;

    &:hover {
      color: #ededed;
    }
  }
`;

const ResponseContainer = styled.div`
  padding: 10px;
  width: 400px;
  background-color: white;
  border: 1px solid black;

  p {
    margin: 4px 0%;
  }
  span {
    font-weight: 606;
  }
`;
