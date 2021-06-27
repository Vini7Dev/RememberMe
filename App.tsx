import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Test from './src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App: React.FC = () => (
  <View style={styles.container}>
    <Test />
    <StatusBar style="auto" />
  </View>
);

export default App;
