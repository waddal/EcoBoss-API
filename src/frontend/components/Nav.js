import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <a onClick={() => navigate('/')}>World Boss API</a>
      <section>
        <a onClick={() => navigate('/about')}>About</a>
        <a href="#">Documentation</a>
        <a onClick={() => navigate('/login')}>Contribute</a>
      </section>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
