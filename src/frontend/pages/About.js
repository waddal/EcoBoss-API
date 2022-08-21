import React from 'react';
import styled from 'styled-components';

import PageWrapper from '../components/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
      <StyledAbout>
        <header></header>
        <section>
          <div className="bossBox">air</div>
          <div className="bossBox">land</div>
          <div className="bossBox">ocean</div>
          <div className="bossBox">water</div>
        </section>
      </StyledAbout>
    </PageWrapper>
  );
};

export default About;

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 4% 1%;
  overflow: scroll;

  header {
    width: 80%;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 2%;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    height: 36%;
    border: 1px solid;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-top: 4%;
  }

  .bossBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.1);

    cursor: pointer;

    &:hover {
      transform: translate(2px, -2px);
    }
  }
`;
