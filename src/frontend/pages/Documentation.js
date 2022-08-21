import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const Documentation = () => {
  return (
    <PageWrapper>
      <StyledDocumentation></StyledDocumentation>
    </PageWrapper>
  );
};

export default Documentation;

const StyledDocumentation = styled.div`
  width: 100%;
  height: 100%;
`;
