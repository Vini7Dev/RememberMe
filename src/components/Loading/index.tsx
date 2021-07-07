import React from 'react';
import { ActivityIndicator } from 'react-native';

import theme from '../../global/styles/theme';

import {
  Container,
} from './styles';

// Theme colors
const { baby_blue90 } = theme.colors;

// Component
const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={baby_blue90} />
    </Container>
  );
};

export default Loading;
