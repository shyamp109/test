import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import {SCREENS} from '../utills/const';
import Login from '../screens/Login';
import MyTabs from './BottomTabNavigation';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={SCREENS.SPLASHSCREEN.name}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          key={SCREENS.SPLASHSCREEN.id}
          name={SCREENS.SPLASHSCREEN.name}
          component={SplashScreen}
        />
        <Stack.Screen
          key={SCREENS.LOGIN.id}
          name={SCREENS.LOGIN.name}
          component={Login}
        />
        <Stack.Screen
          key={SCREENS.EVENTS.id}
          name={SCREENS.EVENTS.name}
          component={MyTabs}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigation;
