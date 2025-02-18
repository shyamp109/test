import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '../../assets';
import {COLORS} from '../../utills/colors';
import {useStyle} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SCREENS} from '../../utills/const';

const SplashScreen = () => {
  const styles = useStyle();
  const navigation = useNavigation();
  const {token} = useSelector(state => state.auth);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (token) {
        navigation.navigate(SCREENS.EVENTS.name);
      } else {
        navigation.navigate(SCREENS.LOGIN.name);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={COLORS.white} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image source={IMAGES.logo} style={styles.logo} />
      </View>
    </View>
  );
};

export default SplashScreen;
