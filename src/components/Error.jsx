import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border-radius: 4px;
  color: #721c24;
  padding: 10px;
`;

const Error = ({ message, ...props }) => (
  <Message>
    <strong>Error: </strong>
    {message}
  </Message>
);

export default Error;
