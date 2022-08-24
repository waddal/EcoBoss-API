import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ActivityForm from '../components/ActivityForm';

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
    <StyledAdmin>
      <Table caption="Activities" data={activities} />
      <Table caption="Suggested" data={pending} />
      <ActivityForm />
    </StyledAdmin>
  );
};

export default Admin;

const StyledAdmin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
