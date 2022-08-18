import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        <a href="#">git</a>
        <a href="#">bug?</a>
      </section>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  padding: 8px;
`;
