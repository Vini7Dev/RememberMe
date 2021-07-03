import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import theme from '../global/styles/theme';
import Greetings from '../screens/Greetings';
import Home from '../screens/Home';
import CreateEditTask from '../screens/CreateEditTask';

const { Navigator, Screen } = createStackNavigator();

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
