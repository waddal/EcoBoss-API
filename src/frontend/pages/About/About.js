import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
      <StyledAbout>
        <header>
          <p>Welcome to the EcoBoss API!</p>
          <p>
            Fighting for a sustainable future, one activity at a time!
          </p>
          <p>
            {/* Ever felt like you want to do something to help the planet - in spite of how futile any
            efforts may seem? WHEL.  */}
          </p>
        </header>
        <section>
          <div className="bossBox">air</div>
          <div className="bossBox">land</div>
          <div className="bossBox">ocean</div>
          <div className="bossBox">water</div>
        </section>
      </StyledAbout>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #212121;
  overflow: hidden;
`;

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    width: auto;
    min-height: 164px;
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
    margin: 25px;
    background-color: rgba(255, 255, 255, 0.1);

    cursor: pointer;

    &:hover {
      transform: translate(2px, -2px);
    }
  }
`;
