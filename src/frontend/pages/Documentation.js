import React from 'react';
import styled from 'styled-components';

import EndpointInfo from '../components/EndpointInfo';

const activityResponses = {
  getRandom: `{
  activity: 'Plant a tree',
  activity_id: 3,
  boss_id: '0',
  description: 'Nature is our ally',
  effectiveness: 2.3,
  is_approved: true,
  link: 'link',
  requirements: 'A seed, water',
  theme_id: '5',
}`,
  getById: `{
  activity: 'Walk there',
  activity_id: 2,
  boss_id: '0',
  description: 'Strap on your shoes for those short commutes and reduce your carbon footprint!',
  effectiveness: 1.2,
  is_approved: true,
  link: 'link',
  requirements: 'Shoes, time, water, thirst for adventure',
  theme_id: '0',
}`,
};

const bossesResponses = {
  all: `{
  "boss_id": 4,
  "description": "whoosh",
  "health": 2147483647,
  "status": "Active",
  "type": "Air"
}`,
};

const Documentation = () => {
  return (
    <StyledDocumentation>
      <nav>
        <h3>
          <a href="#activities">Activities</a>
        </h3>
        <ul>
          <li>
            <a href="#activities-random">Random</a>
          </li>
          <li>
            <a href="#activities-id">Id</a>
          </li>
          <li>
            <a href="#activities-theme">Theme</a>
          </li>
          <li>
            <a href="#activities-boss">Boss</a>
          </li>
        </ul>

        <h3>
          <a href="#bosses">Bosses</a>
        </h3>
        <ul>
          <li>
            <a href="#bosses-all">All</a>
          </li>
        </ul>

        <h3>
          <a href="#guilds">Guilds</a>
        </h3>
        <ul>
          <li>
            <a href="#guilds-all">All</a>
          </li>
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
          <h2>
            <a id="activities">Activities</a>
          </h2>
          <EndpointInfo
            id="activities-random"
            method={'GET'}
            query={'/activities/random'}
            description={'Get a random activity'}
            response={activityResponses.getRandom}
          />

          <EndpointInfo
            id="activities-id"
            method={'GET'}
            query={'/activities/:activity_id'}
            description={'Get an activity by activity_id'}
            response={activityResponses.getById}
          />

          <EndpointInfo
            id="activities-theme"
            method={'GET'}
            query={'/activities?theme_id=[0-7]'}
            description={'Get an activity filtered by query parameter: theme_id'}
            response={activityResponses.getById}
          />

          <EndpointInfo
            id="activities-boss"
            method={'GET'}
            query={'/activities?boss_id=[0-3]'}
            description={'Get an activity filtered by query parameter: boss_id'}
            response={activityResponses.getById}
          />
        </section>

        <section>
          <h2>
            <a id="bosses">Bosses</a>
          </h2>
          <EndpointInfo
            id="bosses-all"
            method={'GET'}
            query={'/bosses'}
            description={'Get all boss information'}
            response={bossesResponses.all}
          />
        </section>

        <section>
          <h2>
            <a id="guilds">Guilds</a>
          </h2>
          <EndpointInfo
            id="guilds-all"
            method={'GET'}
            query={'/guilds'}
            description={'Get all guild information'}
            response={bossesResponses.all}
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
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin-top: 20px;
  }
`;
