import React from 'react';

import { Container } from './styles';

const WhiteBackground: React.FC = ({
  children,
}) => {
  return (
    <Container>
      { children }
    </Container>
  );
};

export default WhiteBackground;
