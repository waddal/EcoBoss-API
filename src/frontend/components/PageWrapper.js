import React from 'react';
import styled from 'styled-components';

const PageWrapper = ({ title, children }) => {
  return <StyledPageWrapper><h1>{title}</h1>{children}</StyledPageWrapper>;
};

export default PageWrapper;

const StyledPageWrapper = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #212121;
`;
