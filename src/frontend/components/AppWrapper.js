import React from 'react';
import styled from 'styled-components';

const AppWrapper = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
};

export default AppWrapper;

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #48a14d;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
`;
