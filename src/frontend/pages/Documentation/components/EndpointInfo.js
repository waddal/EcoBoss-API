import React from 'react';
import styled from 'styled-components';

const EndpointInfo = ({ id, method, query, description, response }) => {
  return (
    <EndpointContainer>
      <a id={id} />
      <Path>
        <Method>{method}</Method>
        <Query>{query}</Query>
      </Path>
      <PathDescription>{description}</PathDescription>
      <p>Response: </p>
      <RouteResponse>
        <pre>{response}</pre>
      </RouteResponse>
    </EndpointContainer>
  );
};

export default EndpointInfo;

const EndpointContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: fit-content;
  padding: 10px;
  cursor: default;

  p {
    font-style: italic;
    padding-left: 20px;
  }
`;

const Path = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid black;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow: hidden;
`;

const Method = styled.div`
  height: 100%;
  background-color: mintcream;
  padding: 4px;
  border-right: 1px solid black;
`;

const Query = styled.div`
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const PathDescription = styled.p`
  margin-bottom: 8px;
`;

const RouteResponse = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  margin-left: 20px;
  background-color: rgba(255, 255, 255, 0.1);
`;
