import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <h1>Try it out:</h1>
      <SearchContainer>
        <section>
          <span>https://www.ecobossapi.com/</span>
          <input type="text" placeholder="activity" />
        </section>
        <div id="submit">Submit</div>
      </SearchContainer>
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
  width: 100% - 20px;
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
