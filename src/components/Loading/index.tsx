import React from 'react';
import { ActivityIndicator } from 'react-native';

import theme from '../../global/styles/theme';

import {
  Container,
} from './styles';

const { baby_blue90 } = theme.colors;

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={baby_blue90} />
    </Container>
  );
};

export default Loading;
