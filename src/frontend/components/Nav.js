import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <a onClick={() => navigate('/')}>World Boss API</a>
      <section>
        <a onClick={() => navigate('/about')} className={pathname === '/about' ? 'active' : ''}>
          About
        </a>
        <a
          onClick={() => navigate('/documentation')}
          className={pathname === '/documentation' ? 'active' : ''}
        >
          Documentation
        </a>
        <a
          onClick={() => navigate('/contribute')}
          className={pathname === '/contribute' ? 'active' : ''}
        >
          Contribute
        </a>
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

  a {
    border: 1px solid transparent;
  }

  .active {
    border: 1px solid black;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;
