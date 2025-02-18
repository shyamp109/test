import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import {fonts, ICONS} from '../assets';
import {SCREENS} from '../utills/const';
import {COLORS} from '../utills/colors';
import {height} from '../utills/helper';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import Search from '../screens/Search';
import Events from '../screens/Events';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const getIconByRouteName = name => {
    switch (name) {
      case SCREENS.SEARCH.name:
        return ICONS.search;

      case SCREENS.EVENTS.name:
        return ICONS.calendar;

      case SCREENS.FAVOURITES.name:
        return ICONS.heart;

      case SCREENS.PROFILE.name:
        return ICONS.user;
    }
  };

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          height: height * 0.08,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        },
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={getIconByRouteName(route.name)}
              style={{
                height: height * 0.03,
                width: height * 0.03,
                resizeMode: 'contain',
                tintColor: !focused ? COLORS.textSecondary : COLORS.heading,
              }}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                fontSize: scale(12),
                fontFamily: focused
                  ? fonts.MontserratExtraBold
                  : fonts.MontserratBold,
                color: focused ? COLORS.heading : COLORS.textSecondary,
                marginBottom: 5,
              }}>
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen name={SCREENS.SEARCH.name} component={Search} />
      <Tab.Screen name={SCREENS.EVENTS.name} component={Events} />
      <Tab.Screen name={SCREENS.FAVOURITES.name} component={Favorites} />
      <Tab.Screen name={SCREENS.PROFILE.name} component={Profile} />
    </Tab.Navigator>
  );
};
export default MyTabs;
