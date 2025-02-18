import React from 'react';
import {View, Text} from 'react-native';
import {fonts} from '../../assets';
import {height} from '../../utills/helper';
import {COLORS} from '../../utills/colors';
import {scale} from 'react-native-size-matters';

const CustomHeader = props => {
  const {name} = props;

  return (
    <View style={{backgroundColor: COLORS.white, padding: height * 0.025}}>
      <Text
        style={{
          fontFamily: fonts.MontserratBold,
          fontSize: scale(26),
          color: COLORS.heading,
          fontWeight: 900,
        }}>
        Hello {name}
      </Text>
      <Text
        style={{
          fontFamily: fonts.MontserratRegular,
          fontSize: scale(16),
          color: COLORS.heading,
          fontWeight: 400,
          marginTop: 5,
        }}>
        Are you ready to dance?
      </Text>
    </View>
  );
};

export default CustomHeader;
