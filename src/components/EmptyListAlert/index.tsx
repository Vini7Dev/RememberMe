import React from 'react';

import {
  Container, AlertText,
} from './styles';

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
