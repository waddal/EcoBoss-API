import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <StyledAbout>
      <h1>About page</h1>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ccc;
  color: #212121;
`;
