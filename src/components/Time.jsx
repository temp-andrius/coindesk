import React from 'react';
import styled from 'styled-components';

const handleTime = props => {
  if (props.now) return new Date();
  if (props.coindesk) return new Date(props.timestamp);
};

const formattedTime = props => {
  const time = handleTime(props).toLocaleDateString('lt-LT', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  });

  return time;
};

const Paragraph = styled.p`
  font-size: 12px;
  color: #71757a;
  margin-bottom: 0;
  width: 98%;
  padding-left: 5px;
`;

const Time = ({ explanation, ...props }) => {
  return (
    <Paragraph>
      {formattedTime(props)} : {explanation}
    </Paragraph>
  );
};

export default Time;
