import React from 'react';

import {
  Container, AlertText,
} from './styles';

// Component
const EmptyListAlert: React.FC = () => {
  return (
    <Container>
      <AlertText>
        Sem Tarefas...
      </AlertText>
    </Container>
  );
};

export default EmptyListAlert;
