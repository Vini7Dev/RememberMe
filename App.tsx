import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Heebo_400Regular,
  Heebo_500Medium,
  Heebo_700Bold,
} from '@expo-google-fonts/heebo';
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';

const App: React.FC = () => {
  // Getting app fonts
  const [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_500Medium,
    Heebo_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  // Check if fonts is already loaded before app renderization
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
};

export default App;
