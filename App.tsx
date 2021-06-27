import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Test from './src';

const App: React.FC = () => (
  <View>
    <Test />
    <StatusBar style="auto" />
  </View>
);

export default App;
