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

  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
      transition: ease-in-out 0.2s all;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }
`;
