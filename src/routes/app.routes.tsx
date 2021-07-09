import React, { useEffect, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';
import theme from '../global/styles/theme';
import Greetings from '../screens/Greetings';
import Home from '../screens/Home';
import CreateEditTask from '../screens/CreateEditTask';

// Creating stack navigator
const { Navigator, Screen } = createStackNavigator();

// Application routes component
const AppRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.baby_blue100,
        },
      }}
    >
      <Screen name="Greetings" component={Greetings} />
      <Screen name="Home" component={Home} />
      <Screen name="CreateEditTask" component={CreateEditTask} />
    </Navigator>
  );
};

export default AppRoutes;
