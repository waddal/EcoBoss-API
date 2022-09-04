import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <a onClick={() => navigate('/')}>EcoBoss API</a>
      <section>
        <a onClick={() => navigate('/about')} className={pathname === '/about' ? 'active' : ''}>
          About
        </a>
        <a
          onClick={() => navigate('/docs')}
          className={pathname === '/docs' ? 'active' : ''}
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

  .active {
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
