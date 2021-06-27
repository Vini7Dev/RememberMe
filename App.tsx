import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Greetings from './src/screens/Greetings';

const App: React.FC = () => (
  <View>
    <Greetings />
    <StatusBar style="auto" />
  </View>
);

export default App;
