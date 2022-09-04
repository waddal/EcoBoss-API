import React from 'react';
import styled from 'styled-components';

import EndpointInfo from '../components/EndpointInfo';

const responses = {
  getRandom: `{
  activity: 'Plant a tree',
  description: 'Nature is our ally',
  theme_id: '5',
  boss_id: '0',
  requirements: 'A seed, water',
  effectiveness: 2.3,
  is_approved: true,
}`,
  getById: `{
  activity: 'Walk there',
  description: 'Strap on your shoes for those short commutes and reduce your carbon footprint!',
  theme_id: '0',
  boss_id: '0',
  requirements: 'Shoes, time, water, thirst for adventure',
  effectiveness: 1.2,
  is_approved: true,
}`,
};

const Documentation = () => {
  return (
    <StyledDocumentation>
      <nav>
        <h3>Activities</h3>
        <ul>
          <li>
            <a href="#endpoint-random">Random</a>
          </li>
          <li>
            <a href="#endpoint-id">Id</a>
          </li>
          <li>
            <a href="#endpoint-theme">Theme</a>
          </li>
          <li>
            <a href="#endpoint-boss">Boss</a>
          </li>
          {/* <li><a href="#endpoint-requirement">Requirement</a></li> */}
          {/* <li><a href="#endpoint-accessability">Accessability</a></li> */}
          {/* <li><a href="#endpoint-price">Price</a></li> */}
        </ul>
      </nav>
      <DocsContainer>
        <h1>Documentation</h1>
        <header>
          <p>
            “If you know the enemy and know yourself, you need not fear the result of a hundred
            battles. If you know yourself but not the enemy, for every victory gained you will also
            suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every
            battle.” - Sun Tzu
          </p>
        </header>
        <section>
          <EndpointInfo
            id="endpoint-random"
            method={'GET'}
            query={'/activities/random'}
            description={'Get a random activity'}
            response={responses.getRandom}
          />

          <EndpointInfo
            id="endpoint-id"
            method={'GET'}
            query={'/activities/:id'}
            description={'Get an activity by activity_id'}
            response={responses.getById}
          />

          <EndpointInfo
            id="endpoint-theme"
            method={'GET'}
            query={'/activities/:theme'}
            description={'Get an activity filtered by theme'}
            response={responses.getById}
          />

          <EndpointInfo
            id="endpoint-boss"
            method={'GET'}
            query={'/activities/:boss'}
            description={'Get an activity filtered by boss'}
            response={responses.getById}
          />
        </section>
      </DocsContainer>
    </StyledDocumentation>
  );
};

export default Documentation;

const StyledDocumentation = styled.div`
  display: flex;
  width: 100%;
  height: 300vh;
  overflow: scroll;
  position: relative;

  h1 {
    color: #ededed;
  }

  nav {
    width: 18%;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4px;
    margin: 0% 1%;
    position: sticky;
    top: 0;
    box-sizing: border-box;
  }

  ul {
    padding-left: 22px;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
  }
`;

const DocsContainer = styled.div`
  justify-self: flex-end;
  height: 200%;
  width: 76%;

  h1 {
    padding: 20px;
  }

  header {
    padding: 20px;
    height: 82px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  section {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin-top: 20px;
  }
`;
