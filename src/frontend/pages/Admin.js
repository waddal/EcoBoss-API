import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const Admin = ({ credentials }) => {
  console.log('credentials: ', credentials);
  return (
    <Content>
      <h3>YOOOOO? Is that you {credentials.username}?</h3>
    </Content>
  );
};

export default Admin;

const Content = styled.div`
  flex:3;
  height:100vh;
  width: 100vw;
  background-color: aqua;
`;