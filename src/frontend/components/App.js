import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <header>
        <nav>
          <a href="#">World Boss API</a>
          <section>
            <a href="#">About</a>
            <a href="#">Documentation</a>
            <a href="#">Contribute</a>
          </section>
        </nav>
      </header>
      <main>
        <h1>Try it out:</h1>
        <SearchContainer>
          <section>
            <span>https://www.worldbossapi.com/</span>
            <input type="text" placeholder="activity" />
          </section>
          <div id="submit">Submit</div>
        </SearchContainer>
      </main>
      <footer>
        <section>
          <a href="#">git</a>
          <a href="#">bug?</a>
        </section>
      </footer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: #48a14d;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
  }

  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    &:hover {
      color: #ccc;
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    background-color: #ccc;
    color: #212121;
  }

  footer {
    display: flex;
    align-items: center;
    height: 10%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: white;
  height: 100% - 10px;
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
  }
`;
