import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

const Teste: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Vinícius" />
    </View>
  );
};

export default Teste;
