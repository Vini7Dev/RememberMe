import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
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

import {
  Button, Text, View,
} from 'react-native';

import NotificationProvider from './src/scripts/providers/NotificationProvider';

import Routes from './src/routes';

async function schedulePushNotification() {
  await NotificationProvider.sendTaskNotification({
    title: 'Título da notificação',
    body: 'Descrição da notificação',
    data: {
      task_id: 'id_da_notificação',
    },
  });
}

const App: React.FC = () => {
  useEffect(() => {
    NotificationProvider.startNotificationsConfigs().then();
  }, []);

  const [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_500Medium,
    Heebo_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Text>
          Your expo push token:
        </Text>
        <Button
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
      {/*
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Routes />
      */}
    </>
  );
};

export default App;
