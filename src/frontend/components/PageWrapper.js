import React from 'react';
import styled from 'styled-components';

const PageWrapper = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #48a14d;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;

  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    &:hover {
      color: #ccc;
      transition: ease-in-out 0.2s all;
    }
  }
`;
