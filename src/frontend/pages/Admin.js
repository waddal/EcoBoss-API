import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ActivityForm from '../components/ActivityForm';
import Table from '../components/Table';

const Admin = ({ credentials }) => {
  const [activities, setActivities] = useState([]);
  const [active, setActive] = useState();

  const handleActive = (activity_id) => {
    axios
      .get(`${process.env.DEV_API_URL}activities/${activity_id}`)
      .then((res) => {
        setActive(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.DEV_API_URL}activities/all`)
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledAdmin>
      <ActivityForm active={active} />
      <Table caption="Activities" data={activities} handleActive={handleActive} />
    </StyledAdmin>
  );
};

export default Admin;

const StyledAdmin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  box-sizing: border-box;
  position: relative;
  border: 1px solid black;
`;
