import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  max-width: 50px;
  margin-right: 10px;
`;

const Title = ({ icon, name, ...props }) => {
  return (
    <Heading>
      <Icon src={icon} alt="Icon" />
      {name} Price
    </Heading>
  );
};

export default Title;
