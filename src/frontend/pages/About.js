import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
      <StyledAbout></StyledAbout>
    </PageWrapper>
  );
};

export default About;

const StyledAbout = styled.div`
  width: 100%;
  height: 100%;
`;
