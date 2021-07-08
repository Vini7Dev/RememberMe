import React from 'react';

import {
  Container, AlertText,
} from './styles';

// EmptyListAlert properties
interface IEmptyListAlert {
  text: string;
}

// Component
const EmptyListAlert: React.FC<IEmptyListAlert> = ({ text }) => {
  return (
    <Container>
      <AlertText>
        {text}
      </AlertText>
    </Container>
  );
};

export default EmptyListAlert;
