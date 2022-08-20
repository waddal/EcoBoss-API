import React from 'react';
import styled from 'styled-components';

const Table = ({ caption = 'Caption', data }) => {
  return (
    <StyledTable>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Activity</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((activity, index) => {
          return (
            <tr key={index}>
              <td>{activity.activity}</td>
              <td>{activity.description}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="1">
            Total
          </th>
          <td>{data.length}</td>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  padding: 20px;
  border: 1px solid black;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  margin: 18px;

  caption {
    text-align: left;
    font-size: 0.8rem;
    font-weight: 800;
    color: white;
    padding: 8px;
  }

  td,
  th {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }

  td {
    min-width: 200px;
    max-width: 500px;
    overflow: scroll;
  }
`;
