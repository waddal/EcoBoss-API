import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';
import Table from '../components/Table';

const Admin = ({ credentials }) => {
  const [activities, setActivities] = useState([]);
  const [pending, setPending] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.DEV_API_URL}activities`)
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageWrapper>
      <StyledAdmin>
        <Table caption="Activities" data={activities} />
        <Table caption="Suggested" data={pending} />
      </StyledAdmin>
    </PageWrapper>
  );
};

export default Admin;

const StyledAdmin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
